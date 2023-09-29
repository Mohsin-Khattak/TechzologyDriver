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
import {t} from 'i18next';

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
            // label={`${'Payment Status -'} ${item?.payment_status}`}
            label={`${item?.payment_status}`}
          />

          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Regular
              style={{
                color: colors.text,
                fontSize: mvs(12),
                marginTop: mvs(5),
              }}
              label={item?.delivery_status}
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
              title={t('view_details')}
              onPress={onPress}
            />
            {item?.delivery_status === 'cancelled' ? (
              <>
                <View
                  style={{
                    width: '45%',
                    height: mvs(40),
                    backgroundColor: colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: mvs(10),
                  }}>
                  <Regular color={colors.white} label={item?.delivery_status} />
                </View>
              </>
            ) : (
              <IconButton
                Icon={<Read />}
                title={t('delivered')}
                textStyle={{marginLeft: mvs(5)}}
                containerStyle={{width: '45%', height: mvs(40)}}
              />
            )}
          </Row>
        </View>
      </Row>
    </View>
  );
};
export default React.memo(DeliveryCompletedCard);
