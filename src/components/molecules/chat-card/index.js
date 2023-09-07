import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Bold from 'typography/bold-text';
import {useTheme} from '@react-navigation/native';

const ChatCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.background}}>
      <Row style={styles.InnerContainer}>
        <View style={{...styles.imageContainer, borderColor: colors.primary}}>
          <ImageBackground
            borderRadius={mvs(10)}
            source={forklift}
            style={styles.backGroundImage}>
            {/* <Image source={{uri: item?.image}} style={styles.innerImage} /> */}
          </ImageBackground>
        </View>
        <View style={{paddingHorizontal: mvs(10), flex: 1}}>
          <Bold color={colors.text} label={'Mitsubishi'} />
          <Regular
            color={colors.text}
            numberOfLines={1}
            label={'Mitsubishi@email.com'}
          />
        </View>
        <Regular color={colors.text} label={'08:06'} />
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(ChatCard);
