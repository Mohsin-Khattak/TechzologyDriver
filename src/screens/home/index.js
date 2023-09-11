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

const HomeTab = props => {
  const colors = useTheme().colors;

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <HomeHeader menu title={'Dashboard'} />

      <Row style={{paddingHorizontal: mvs(20)}}>
        <TouchableOpacity
          onPress={() => navigate('Delivery')}
          style={styles.compeleteContainer}>
          <CompletedDelivery />
          <Regular style={styles.text} label={t('completed_delivery')} />
          <Bold style={styles.text} label={'15'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('PendingDelivery')}
          style={styles.pendingContainer}>
          <PendingDelivery />
          <Regular style={styles.text} label={t('pending_delivery')} />
          <Bold style={styles.text} label={'200'} />
        </TouchableOpacity>
      </Row>
      <Row style={styles.boxContainer}>
        <TouchableOpacity
          onPress={() => navigate('Collection')}
          style={styles.pendingContainer}>
          <TotalCollected />
          <Regular style={styles.text} label={t('total_collected')} />
          <Bold style={styles.text} label={'$500.00'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('MyEarning')}
          style={styles.compeleteContainer}>
          <Earnings />
          <Regular style={styles.text} label={t('Earnings')} />
          <Bold style={styles.text} label={'$80.00'} />
        </TouchableOpacity>
      </Row>
      <View style={styles.bottomContainer}>
        <Row style={styles.cancelledContainer}>
          <Cancle />
          <Regular
            style={{marginLeft: mvs(20), flex: 1}}
            label={'cancelled_delivery'}
          />
          <Regular label={'05'} />
        </Row>
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
              label={'on_the_way (16)'}
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
              label={'picked (47)'}
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
              label={'Assigned (20)'}
            />
          </TouchableOpacity>
        </Row>
      </View>
    </View>
  );
};
export default HomeTab;
