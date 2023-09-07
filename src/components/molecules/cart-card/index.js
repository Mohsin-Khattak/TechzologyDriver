import {Delete} from 'assets/icons';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const CartCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  const [count, setCount] = React.useState(1);

  return (
    <View
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.background}}>
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={styles.imageMainContainer}>
          <View style={{backgroundColor: colors.background, height: mvs(110)}}>
            <View style={{marginLeft: mvs(10)}}>
              <ImageBackground
                source={{
                  uri: 'https://png.pngitem.com/pimgs/s/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png',
                }}
                style={styles.backGroundImage}></ImageBackground>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Regular color={colors.text} label={'shipping container'} />
          <Regular
            color={colors.text}
            numberOfLines={2}
            fontSize={mvs(10)}
            label={
              'The 20ft dry container is ideal for moving smaller shipments of dry goods.'
            }
          />
          <Row style={{marginTop: mvs(5)}}>
            <Regular color={colors.text} style={{flex: 1}} label={'$120.000'} />
            <TouchableOpacity>
              <Delete />
            </TouchableOpacity>
          </Row>
        </View>
        <View style={{alignItems: 'center', marginTop: mvs(10)}}>
          <PrimaryButton
            disabled={count == '1'}
            onPress={() => setCount(count - 1)}
            textStyle={{...styles.subAddText, color: colors.text}}
            containerStyle={{
              ...styles.subQuantity,
              borderColor: colors.primary,
            }}
            title={'-'}
          />
          <View style={styles.countextContainer}>
            <Regular color={colors.text} label={count} />
          </View>
          <PrimaryButton
            onPress={() => setCount(count + 1)}
            textStyle={{...styles.subAddText, color: colors.text}}
            containerStyle={{
              ...styles.subQuantity,
              borderColor: colors.primary,
            }}
            title={'+'}
          />
        </View>
      </Row>
    </View>
  );
};
export default React.memo(CartCard);
