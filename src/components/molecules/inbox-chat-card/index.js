import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const InboxChatCard = ({item, style, onPress, loading}) => {
  const me = item.me;
  const colors = useTheme().colors;

  return (
    <View
      onPress={onPress}
      style={{
        ...styles.container,
        alignItems: me ? 'flex-end' : 'flex-start',
        backgroundColor: colors.background,
      }}>
      <View
        style={[
          {
            borderBottomRightRadius: me ? mvs(0) : mvs(23),
            borderBottomLeftRadius: me ? mvs(23) : mvs(0),
            opacity: me ? 0.5 : 1,
          },
          styles.innerContainer,
        ]}>
        <Medium
          color={colors.white}
          fontSize={mvs(12)}
          numberOfLines={5}
          label={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'
          }
        />
        <Regular style={styles.timeText} label={'6 min ago'} />
      </View>
    </View>
  );
};
export default React.memo(InboxChatCard);
