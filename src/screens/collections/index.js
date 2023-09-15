import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {Row} from 'components/atoms/row';

import {Earnings} from 'assets/icons/app-icons';

import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {useAppSelector} from 'hooks/use-store';
import {
  getCollection,
  getCollectionHistory,
} from 'services/api/auth-api-actions';
import {Loader} from 'components/atoms/loader';
import CollectionCard from 'components/molecules/collection-card';

const Collection = props => {
  const colors = useTheme().colors;
  const {userInfo} = useAppSelector(s => s?.user);
  const userId = userInfo?.id;

  const [data, getData] = React.useState({});
  const [history, getHistory] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const [pageLoading, setPageLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getCollection(userId);
      getData(res);
    } catch (error) {
      console.log('error=====>', UTILS.returnError());
    } finally {
      setLoading(false);
    }
  };

  const fetchCollectionHistory = async setDataLoading => {
    try {
      setLoading(true);
      setDataLoading(true);
      const res = await getCollectionHistory(userId, pageNumber);
      getHistory(preProducts =>
        pageNumber > 1
          ? {
              ...res,
              data: preProducts?.data
                ? [...preProducts?.data, ...res?.data]
                : [...res?.data],
            }
          : res,
      );
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setDataLoading(false);
      setLoading(false);
    }
  };
  const handleLoadMore = () => {
    const lastPage = Math.ceil(
      (history?.meta?.total || 0) / history?.meta?.per_page,
    );
    if (!pageLoading && pageNumber < lastPage) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };
  React.useEffect(() => {
    if (pageNumber > 0 && !pageLoading) {
      fetchCollectionHistory(setPageLoading);
    }
  }, [pageNumber]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const renderEarnings = ({item}) => (
    <CollectionCard
      item={item}
      onPress={() =>
        navigate('OrderDetails', {status: '4', deliveryId: item?.order_id})
      }
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('Collection')} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row style={{paddingHorizontal: mvs(20), marginTop: mvs(20)}}>
            <Row style={styles.balanceContainer}>
              <View>
                <Regular
                  fontSize={mvs(12)}
                  color={colors.white}
                  label={t('today')}
                />
                <Bold
                  style={{marginVertical: mvs(5)}}
                  color={colors.white}
                  fontSize={mvs(18)}
                  label={data?.today_collection}
                />
                <Regular
                  fontSize={mvs(12)}
                  color={colors.white}
                  label={data?.today_date}
                />
              </View>
              <Earnings />
            </Row>

            <View
              style={{
                ...styles.rechargeContainer,
                backgroundColor: colors.green,
              }}>
              <Regular
                fontSize={mvs(12)}
                color={colors.white}
                label={t('yesterday')}
              />
              <Bold
                style={{marginVertical: mvs(5)}}
                color={colors.white}
                fontSize={mvs(18)}
                label={data?.yesterday_collection}
              />
              <Regular
                fontSize={mvs(12)}
                color={colors.white}
                label={data?.yesterday_date}
              />
            </View>
          </Row>
          <CustomFlatList
            showsVerticalScrollIndicator={false}
            data={history?.data || []}
            renderItem={renderEarnings}
            onEndReached={handleLoadMore} // Load more when reaching the end of the list
            onEndReachedThreshold={0.5} // Load more when the user reaches the last 50% of the list
            ListFooterComponent={pageLoading && <Loader />}
            contentContainerStyle={{
              paddingBottom: mvs(20),
              paddingHorizontal: mvs(20),
            }}
          />
        </>
      )}
    </View>
  );
};
export default Collection;
