import {useTheme} from '@react-navigation/native';
import HomeHeader from 'components/atoms/headers/home-header';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {
  Cancle,
  CompletedDelivery,
  Delivery,
  Earnings,
  HomeWork,
  PendingDelivery,
  PickUp,
  TotalCollected,
} from 'assets/icons/app-icons';
import Regular from 'typography/regular-text';
import {t} from 'i18next';
import Bold from 'typography/bold-text';
import {navigate} from 'navigation/navigation-ref';
import {UTILS} from 'utils';
import {getDashBoard} from 'services/api/auth-api-actions';
import {useAppSelector} from 'hooks/use-store';

const HomeTab = props => {
  const {userInfo} = useAppSelector(s => s?.user);

  const userId = userInfo?.id;

  const colors = useTheme().colors;
  const [data, getData] = React.useState({});

  const fetchData = async () => {
    try {
      const res = await getDashBoard(userId);
      console.log(res);
      getData(res);
    } catch (error) {
      console.log('error=====>', UTILS.returnError());
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <HomeHeader menu title={t('dashboard')} />

      <Row style={{paddingHorizontal: mvs(20)}}>
        <TouchableOpacity
          onPress={() => navigate('Delivery')}
          style={styles.compeleteContainer}>
          <CompletedDelivery />
          <Regular style={styles.text} label={t('completed_delivery')} />
          <Bold
            style={styles.text}
            label={data?.completed_delivery ? data?.completed_delivery : '0'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('PendingDelivery', {pending: 'pending'})}
          style={styles.pendingContainer}>
          <PendingDelivery />
          <Regular style={styles.text} label={t('pending_delivery')} />
          <Bold
            style={styles.text}
            label={data?.pending_delivery ? data?.pending_delivery : '0'}
          />
        </TouchableOpacity>
      </Row>
      <Row style={styles.boxContainer}>
        <TouchableOpacity
          onPress={() => navigate('Collection')}
          style={styles.pendingContainer}>
          <TotalCollected />
          <Regular style={styles.text} label={t('total_collected')} />
          <Bold
            style={styles.text}
            label={data?.total_collection ? data?.total_collection : '$0'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('MyEarning')}
          style={styles.compeleteContainer}>
          <Earnings />
          <Regular style={styles.text} label={t('earnings')} />
          <Bold
            style={styles.text}
            label={data?.total_earning ? data?.total_earning : '$0'}
          />
        </TouchableOpacity>
      </Row>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigate('CancelledDelivery')}>
          <Row style={styles.cancelledContainer}>
            <Cancle />
            <Regular
              style={{marginLeft: mvs(20), flex: 1}}
              label={t('cancelled_delivery')}
            />
            <Regular label={data?.cancelled} />
          </Row>
        </TouchableOpacity>
        <Row style={{marginTop: mvs(20)}}>
          <TouchableOpacity
            onPress={() => navigate('PendingDelivery')}
            style={{alignItems: 'center'}}>
            <View style={styles.circle}>
              <Delivery />
            </View>
            <Regular
              color={colors.white}
              fontSize={mvs(12)}
              label={`${t('on_the_way')} (${data?.on_the_way || 0})`}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('PendingDelivery', {picked: 'picked'})}
            style={{alignItems: 'center'}}>
            <View style={styles.circle}>
              <PickUp />
            </View>
            <Regular
              color={colors.white}
              fontSize={mvs(12)}
              label={`${t('picked')} (${data?.picked || 0})`}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('PendingDelivery', {assign: 'assign'})}
            style={{alignItems: 'center'}}>
            <View style={styles.circle}>
              <HomeWork />
            </View>
            <Regular
              color={colors.white}
              fontSize={mvs(12)}
              label={`${t('assigned')} (${data?.confirmed || 0})`}
            />
          </TouchableOpacity>
        </Row>
      </View>
    </View>
  );
};
export default HomeTab;
