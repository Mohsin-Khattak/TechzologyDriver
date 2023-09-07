import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  I18nManager,
  StyleSheet,
} from 'react-native';
import Regular from 'typography/regular-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@react-navigation/native';
const ProductDetailButtonCard = ({onPress, label}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity style={{borderRadius: mvs(10)}} onPress={onPress}>
      <Row style={{...styles.row}}>
        <View style={styles.line} />
        <Regular color={colors.text} style={styles.label} label={label} />
        <FontAwesome5
          name={I18nManager.isRTL ? 'arrow-left' : 'arrow-right'}
          size={mvs(20)}
          color={colors.iconColor}
        />
      </Row>
    </TouchableOpacity>
  );
};
export default ProductDetailButtonCard;
const styles = StyleSheet.create({
  line: {
    width: mvs(10),
    height: mvs(50),
    backgroundColor: colors.primary,
    borderTopLeftRadius: mvs(10),
    borderBottomLeftRadius: mvs(10),
  },
  row: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: mvs(10),
  },
  label: {flex: 1, marginLeft: mvs(10)},
});
