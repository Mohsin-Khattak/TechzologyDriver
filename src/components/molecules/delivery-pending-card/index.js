import {useTheme} from '@react-navigation/native';
import {TickTwo} from 'assets/icons';
import {
  AppLocation,
  CircleMark,
  Read,
  ViewDetails,
} from 'assets/icons/app-icons';
import {IconButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {t} from 'i18next';

const DeliveryPendingCard = ({
  item,
  style,
  onPress,
  loading,
  onPressDirection,
  setDeliveredModal,
  setOrderId,
  markas,
}) => {
  const colors = useTheme().colors;

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Row
        style={{
          backgroundColor: colors.background,
          justifyContent: 'flex-start',
        }}>
        <View style={styles.contentContainer}>
          <Regular label={t('order_code')} />
          <Regular style={{marginTop: mvs(5)}} label={item?.code} />
          <Row style={{alignItems: 'center'}}>
            <Regular
              style={{
                color: colors.text,
                fontSize: mvs(12),
                marginTop: mvs(5),
              }}
              label={item?.date}
            />

            <Medium
              style={{marginTop: mvs(5)}}
              fontSize={mvs(12)}
              label={item?.grand_total}
            />
          </Row>

          <Regular
            style={{
              color: colors.text,
              fontSize: mvs(14),
            }}
            label={`${t('payment_status')} - ${item?.payment_status}`}
            // label={`${'Payment Status '}`}
          />

          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Regular
              style={{
                color: colors.text,
                fontSize: mvs(12),
                marginTop: mvs(5),
              }}
              label={item?.payment_type}
            />
            <View style={styles.cross}>
              <TickTwo />
            </View>
          </Row>
          <IconButton
            onPress={onPressDirection}
            Icon={<AppLocation />}
            title={t('get_direction')}
            textStyle={{marginLeft: mvs(10)}}
            containerStyle={{
              height: mvs(40),
              marginTop: mvs(10),
              justifyContent: 'center',
            }}
          />
          <Row style={{marginTop: mvs(10)}}>
            <IconButton
              containerStyle={styles.viewDetailsBtn}
              Icon={<ViewDetails />}
              textStyle={{
                color: colors.primary,
                marginLeft: mvs(5),
                fontSize: mvs(12),
              }}
              title={t('view_details')}
              onPress={onPress}
            />
            <IconButton
              onPress={() => {
                setDeliveredModal(true), setOrderId(item);
              }}
              Icon={<CircleMark />}
              title={markas}
              textStyle={{marginLeft: mvs(5), fontSize: mvs(12)}}
              containerStyle={{width: '50%', height: mvs(40)}}
            />
          </Row>
        </View>
      </Row>
    </View>
  );
};
export default React.memo(DeliveryPendingCard);
