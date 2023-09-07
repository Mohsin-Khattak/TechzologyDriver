import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, silder} from 'assets/images';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {useTheme} from '@react-navigation/native';

const AllFeaturedCategories = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.downColor}}>
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={styles.imageMainContainer}>
          <View style={{backgroundColor: 'white'}}>
            <ImageBackground
              source={featured}
              style={styles.backGroundImage}></ImageBackground>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Regular label={'shipping container'} />
          <Regular
            numberOfLines={2}
            fontSize={mvs(10)}
            color={colors.text}
            label={
              'The 20ft dry container is ideal for moving smaller shipments of dry goods.'
            }
          />
          <Regular color={colors.text} label={'$120.000'} />
        </View>
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(AllFeaturedCategories);
