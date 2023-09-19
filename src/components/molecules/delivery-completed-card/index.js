import {useTheme} from '@react-navigation/native';
import {Read, ViewDetails} from 'assets/icons/app-icons';
import {IconButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {TickTwo} from 'assets/icons';

const DeliveryCompletedCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

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
            // label={`${'Payment Status -'} ${item?.payment_status}`}
            label={`${'Payment Status '}`}
          />

          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Regular
              style={{
                color: colors.text,
                fontSize: mvs(12),
                marginTop: mvs(5),
              }}
              label={'Cash On Delivery'}
            />
            <View style={styles.cross}>
              <TickTwo />
            </View>
          </Row>
          <Row style={{marginTop: mvs(10)}}>
            <IconButton
              containerStyle={styles.viewDetailsBtn}
              Icon={<ViewDetails />}
              textStyle={{color: colors.primary, marginLeft: mvs(5)}}
              title="View Details"
              onPress={onPress}
            />
            <IconButton
              Icon={<Read />}
              title={'Delivered'}
              textStyle={{marginLeft: mvs(5)}}
              containerStyle={{width: '45%', height: mvs(40)}}
            />
          </Row>
        </View>
      </Row>
    </View>
  );
};
export default React.memo(DeliveryCompletedCard);
