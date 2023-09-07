import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, ford, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';

const BrowseAllVendersCard = ({item, style, onPress, loading}) => {
  return (
    <View onPress={onPress} style={styles.container}>
      <ImageBackground
        source={ford}
        style={{width: mvs(120), height: mvs(80)}}></ImageBackground>
    </View>
  );
};
export default React.memo(BrowseAllVendersCard);
