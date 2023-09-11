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
import EarningCard from 'components/molecules/earning-card';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {useAppSelector} from 'hooks/use-store';
import {
  getCollection,
  getCollectionHistory,
} from 'services/api/auth-api-actions';

const Collection = props => {
  const colors = useTheme().colors;
  const user = useAppSelector(s => s);
  const userId = user?.user?.userInfo?.user?.id;

  const [data, getData] = React.useState({});
  const [history, getHistory] = React.useState([]);

  const fetchData = async () => {
    try {
      const res = await getCollection(userId);
      getData(res);
      const resHistory = await getCollectionHistory(userId);
      console.log('history check===?', resHistory);
      getHistory(resHistory);
    } catch (error) {
      console.log('error=====>', UTILS.returnError());
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const featuredCategories = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
  ];

  const renderEarnings = ({item}) => (
    <EarningCard
      item={item}
      onPress={() => navigate('OrderDetails', {status: '4'})}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('Collection')} />
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
        data={history?.data}
        renderItem={renderEarnings}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
    </View>
  );
};
export default Collection;
