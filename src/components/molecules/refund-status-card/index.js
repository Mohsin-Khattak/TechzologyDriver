import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {useTheme} from '@react-navigation/native';
import {Row} from 'components/atoms/row';

const RefundStatusCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={styles.innerContainer} />
        <View
          style={{
            paddingHorizontal: mvs(11),
            paddingVertical: mvs(14),
            width: '70%',
          }}>
          <Regular color={colors.text} label={'Shipping Container'} />
          <Regular
            numberOfLines={2}
            color={colors.text}
            fontSize={mvs(10)}
            label={
              'The 20ft dry container is ideal for moving smaller shipments of dry goods.'
            }
          />
          <Regular
            style={{marginTop: mvs(17)}}
            color={colors.text}
            fontSize={mvs(10)}
            label={'202104002-050430'}
          />
          <Regular
            style={{marginTop: mvs(5)}}
            color={colors.text}
            fontSize={mvs(10)}
            label={'Date: 02-08-2023'}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Regular color={colors.text} fontSize={mvs(12)} label={'$12.000'} />
          <Regular color={colors.red} fontSize={mvs(12)} label={'Rejected'} />
        </View>
      </Row>
    </View>
  );
};
export default React.memo(RefundStatusCard);

{
  /* <ImageBackground
            borderRadius={mvs(10)}
            source={forklift}
            style={styles.backGroundImage}>
            {/* <Image source={{uri: item?.image}} style={styles.innerImage} />
           </ImageBackground> */
}
