import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import styles from './styles';
import Regular from 'typography/regular-text';
import {Clander, CreaditCard, Delivery} from 'assets/icons';
import {forklift} from 'assets/images';
import {useTheme} from '@react-navigation/native';

const ShippingCostCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: colors.downColor}}
      onPress={onPress}>
      <Row>
        <View style={styles.idContainer} />

        <View
          style={{
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageBackground
            source={forklift}
            style={{width: mvs(100), height: mvs(80)}}></ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: mvs(10),
          }}>
          <Regular label={'Shipping Container'} />
          <Regular
            color={colors.text}
            fontSize={mvs(12)}
            numberOfLines={3}
            label={
              'The 20ft dry container is ideal for moving smaller shipments of dry goods.'
            }
          />
        </View>
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(ShippingCostCard);
