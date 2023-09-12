import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const CollectionCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={{...styles.container, backgroundColor: colors.downColor}}>
        <View style={styles.idContainer} />
        <View style={styles.contentContainer}>
          <Medium color={colors.text} label={item?.order_code} />
          <Medium
            style={{marginTop: mvs(5)}}
            color={colors.text}
            label={item?.date}
          />
        </View>
        <View style={styles.priceContainer}>
          <Medium fontSize={mvs(12)} label={item?.collection} />
        </View>
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(CollectionCard);
