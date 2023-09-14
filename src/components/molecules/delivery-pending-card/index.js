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

const DeliveryPendingCard = ({
  item,
  style,
  onPress,
  loading,
  onPressDirection,
  setDeliveredModal,
}) => {
  const colors = useTheme().colors;
  console.log('item me check=======>', item);
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Row
        style={{
          backgroundColor: colors.background,
          justifyContent: 'flex-start',
        }}>
        <View style={styles.contentContainer}>
          <Regular label={'Order Code'} />
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
            label={`${'Payment Status -'} ${item?.payment_status}`}
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
            title={'Get Direction'}
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
              title="View Details"
              onPress={onPress}
            />
            <IconButton
              onPress={() => setDeliveredModal(true)}
              Icon={<CircleMark />}
              title={'Mark As Delivered'}
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
