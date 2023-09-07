import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import Medium from 'typography/medium-text';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const WalletHistoryCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <Row
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.downColor}}>
      <View style={styles.idContainer}>
        <Medium color={colors.white} label={'#'} />
        <Medium color={colors.white} label={'01'} />
      </View>
      <View style={styles.contentContainer}>
        <Medium color={colors.text} label={'02-08-2023'} />
        <Medium color={colors.text} label={'Payment Method Refund'} />
      </View>
      <View style={styles.priceContainer}>
        <Medium fontSize={mvs(12)} label={'$12.150'} />
        {/* <Medium label={'01'} /> */}
      </View>
    </Row>
  );
};
export default React.memo(WalletHistoryCard);
