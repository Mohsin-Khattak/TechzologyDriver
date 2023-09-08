import {useTheme} from '@react-navigation/native';
import HomeHeader from 'components/atoms/headers/home-header';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {
  Cancle,
  CompletedDelivery,
  Delivery,
  Earnings,
  PendingDelivery,
  PickUp,
  TotalCollected,
} from 'assets/icons/app-icons';
import Regular from 'typography/regular-text';
import {t} from 'i18next';
import Bold from 'typography/bold-text';

const HomeTab = props => {
  const colors = useTheme().colors;

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <HomeHeader menu title={'Dashboard'} />

      <Row style={{paddingHorizontal: mvs(20)}}>
        <View style={styles.compeleteContainer}>
          <CompletedDelivery />
          <Regular style={styles.text} label={t('completed_delivery')} />
          <Bold style={styles.text} label={'15'} />
        </View>
        <View style={styles.pendingContainer}>
          <PendingDelivery />
          <Regular style={styles.text} label={t('pending_delivery')} />
          <Bold style={styles.text} label={'200'} />
        </View>
      </Row>
      <Row style={styles.boxContainer}>
        <View style={styles.pendingContainer}>
          <TotalCollected />
          <Regular style={styles.text} label={t('total_collected')} />
          <Bold style={styles.text} label={'$500.00'} />
        </View>
        <View style={styles.compeleteContainer}>
          <Earnings />
          <Regular style={styles.text} label={t('Earnings')} />
          <Bold style={styles.text} label={'$80.00'} />
        </View>
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
          <View style={{alignItems: 'center'}}>
            <View style={styles.circle}>
              <Delivery />
            </View>
            <Regular
              color={colors.white}
              fontSize={mvs(12)}
              label={'on_the_way (16)'}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.circle}>
              <PickUp />
            </View>
            <Regular
              color={colors.white}
              fontSize={mvs(12)}
              label={'picked (47)'}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.circle}>
              <Delivery />
            </View>
            <Regular
              color={colors.white}
              fontSize={mvs(12)}
              label={'Assigned (20)'}
            />
          </View>
        </Row>
      </View>
    </View>
  );
};
export default HomeTab;
