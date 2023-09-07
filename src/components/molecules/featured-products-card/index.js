import {useTheme} from '@react-navigation/native';
import {forklift} from 'assets/images';
import {mvs} from 'config/metrices';
import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

const FeaturedProducts = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.downColor}}>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          borderRadius={mvs(10)}
          source={forklift}
          style={styles.backGroundImage}>
          <Image
            source={{uri: item?.thumbnail_image}}
            style={styles.innerImage}
          />
        </ImageBackground>

        <View style={{padding: mvs(5), alignItems: 'center'}}>
          <Regular
            style={{textAlign: 'center'}}
            color={colors.text}
            label={item?.name}
            numberOfLines={2}
            fontSize={mvs(12)}
          />

          <Regular
            color={colors.text}
            label={item?.main_price}
            fontSize={mvs(12)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(FeaturedProducts);
