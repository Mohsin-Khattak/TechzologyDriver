import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, silder} from 'assets/images';
import {useTheme} from '@react-navigation/native';

const FeaturedCategories = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.downColor}}>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          borderRadius={mvs(10)}
          source={featured}
          style={styles.backGroundImage}>
          <Image source={{uri: item?.banner}} style={styles.innerImage} />
        </ImageBackground>
        <Regular
          color={colors.text}
          label={item?.name}
          fontSize={mvs(10)}
          style={{marginTop: mvs(15), textAlign: 'center'}}
        />
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(FeaturedCategories);
