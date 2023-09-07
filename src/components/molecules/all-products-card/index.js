import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';
import {useTheme} from '@react-navigation/native';

const AllProductsCard = ({item, style, onPress, loading, onAddCart}) => {
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
        <PrimaryButton
          onPress={onAddCart}
          containerStyle={styles.btnAddtoCart}
          title="Add To Cart"
        />
        <View style={{padding: mvs(5), alignItems: 'center'}}>
          <Regular
            style={{textAlign: 'center'}}
            color={colors.text}
            label={item?.name}
            fontSize={mvs(12)}
            numberOfLines={3}
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
export default React.memo(AllProductsCard);
