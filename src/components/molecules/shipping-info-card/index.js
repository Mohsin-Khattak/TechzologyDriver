import {TickTwo} from 'assets/icons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
import {colors} from 'config/colors';
import {useTheme} from '@react-navigation/native';

const ShippingInfoCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: colors.downColor,
        borderWidth: item?.selected ? mvs(1) : mvs(0),
        borderColor: item?.selected ? colors.green : colors.white,
      }}>
      <View style={styles.innerContainer}>
        <Row>
          <View style={{flex: 1}}>
            <Row style={{justifyContent: 'flex-start'}}>
              <Regular
                style={{flex: 1}}
                fontSize={mvs(12)}
                label={t('address')}
              />
              <Regular
                color={colors.text}
                style={styles.yourAddress}
                label={'your location'}
              />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular style={{flex: 1}} fontSize={mvs(12)} label={t('city')} />
              <Regular
                color={colors.text}
                style={styles.yourCity}
                label={'your city'}
              />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular
                style={{flex: 1}}
                fontSize={mvs(12)}
                label={t('country')}
              />
              <Regular
                color={colors.text}
                style={styles.yourCountry}
                label={'your country'}
              />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular style={{flex: 1}} label={t('phone')} />
              <Regular
                color={colors.text}
                style={styles.phone}
                label={'03448422399'}
              />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular
                style={{flex: 1}}
                fontSize={mvs(12)}
                label={t('postal_code ')}
              />
              <Regular
                color={colors.text}
                style={styles.passCode}
                label={'0344'}
              />
            </Row>
          </View>
          {item?.selected ? (
            <View style={styles.circle}>
              <TickTwo />
            </View>
          ) : (
            <></>
          )}
        </Row>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(ShippingInfoCard);
