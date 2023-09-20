import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';

import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {useIsFocused, useTheme} from '@react-navigation/native';
import {ClanderTwo, DeliveryTwo} from 'assets/icons';
import {Loader} from 'components/atoms/loader';
import DeliveryCompletedCard from 'components/molecules/delivery-completed-card';
import {useAppSelector} from 'hooks/use-store';
import Entypo from 'react-native-vector-icons/Entypo';
import {getCompletedDelivery} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';

const DeliveryTab = props => {
  const colors = useTheme().colors;
  const isFocus = useIsFocused();

  const {userInfo} = useAppSelector(s => s?.user);
  const userId = userInfo?.id;

  const [loading, setLoading] = React.useState(false);
  const [select, setSelect] = React.useState(true);
  const [selectByPayment, setSelectByPayment] = React.useState('');
  const [selectByDelivery, setSelectByDelivery] = React.useState('');
  const [deliverySelect, setDeliverySelect] = React.useState(true);

  const [pageLoading, setPageLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [data, setData] = React.useState([]);

  const toggleOptions = () => {
    setSelect(!select);
  };
  const deliveryOptions = () => {
    setDeliverySelect(!deliverySelect);
  };

  const fetchData = async setDataLoading => {
    try {
      setLoading(true);
      setDataLoading(true);
      const res = await getCompletedDelivery(
        userId,
        selectByPayment?.toLowerCase(),
        selectByDelivery?.toLowerCase(),
        pageNumber,
      );

      setData(preProducts =>
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
    const lastPage = Math.ceil((data?.meta?.total || 0) / data?.meta?.per_page);
    if (!pageLoading && pageNumber < lastPage) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };
  React.useEffect(() => {
    if (pageNumber > 0 && !pageLoading) {
      fetchData(setPageLoading);
    }
  }, [pageNumber, selectByDelivery, selectByPayment, isFocus]);

  const renderCompletedDelivery = ({item, index}) => (
    <DeliveryCompletedCard
      item={item}
      onPress={() =>
        navigate('OrderDetails', {
          status: '4',
          deliveryId: item?.id,
        })
      }
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('Completed Delivery')} />
      <Row style={{paddingHorizontal: mvs(20)}}>
        <Row style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => toggleOptions()}
            style={[styles.selectButton]}>
            <Row
              style={{
                paddingHorizontal: mvs(5),
              }}>
              <Regular
                color={colors.text}
                fontSize={mvs(12)}
                label={selectByPayment === '' ? t('All') : t(selectByPayment)}
              />
              <Entypo
                name={'chevron-small-right'}
                size={20}
                color={colors.text}
                style={{transform: [{rotate: select ? '0deg' : '90deg'}]}}
              />
            </Row>
          </TouchableOpacity>
          <View style={{marginLeft: mvs(10)}}>
            <ClanderTwo />
          </View>

          {!select ? (
            <View
              style={{
                ...styles.dotContainer,
                backgroundColor: colors.downColor,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('');
                  setSelect(!select);
                }}>
                <Regular
                  fontSize={mvs(12)}
                  color={colors.text}
                  label={t('all')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('Today');
                  setSelect(!select);
                }}>
                <Regular
                  fontSize={mvs(12)}
                  style={{color: colors.text, marginTop: mvs(10)}}
                  label={t('Today')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('This-Week');
                  setSelect(!select);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('This Week')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('This-Month');
                  setSelect(!select);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('This Month')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Row>

        <Row style={styles.innerContainer}>
          <View style={{marginRight: mvs(10)}}>
            <DeliveryTwo />
          </View>
          <TouchableOpacity
            onPress={() => deliveryOptions()}
            style={styles.selectButton}>
            <Row
              style={{
                paddingHorizontal: mvs(5),
              }}>
              <Regular
                color={colors.text}
                fontSize={mvs(12)}
                label={selectByDelivery === '' ? t('All') : t(selectByDelivery)}
              />
              <Entypo
                name={'chevron-small-right'}
                size={20}
                color={colors.text}
                style={{
                  transform: [{rotate: deliverySelect ? '0deg' : '90deg'}],
                }}
              />
            </Row>
          </TouchableOpacity>
          {!deliverySelect ? (
            <View
              style={{
                ...styles.deliverdContainer,
                backgroundColor: colors.downColor,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('ALL');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular color={colors.text} label={t('ALL')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('COD');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  label={t('COD')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('NON-COD');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('NON COD')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Row>
      </Row>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomFlatList
            showsVerticalScrollIndicator={false}
            data={data?.data || []}
            renderItem={renderCompletedDelivery}
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
export default DeliveryTab;
