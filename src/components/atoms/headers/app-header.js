import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import {Row} from '../row';
const AppHeader = ({
  style = {},
  title,
  name,
  icon = false,
  back = false,
  onChangeText = t => {},
  isSearch = false,
  placeholder = 'Search',
  unreadNotification,
  notification,
  onPress,
  ...props
}) => {
  const navigation = useNavigation();
  const colors = useTheme().colors;

  return (
    <View
      style={{...styles.container, style, backgroundColor: colors.background}}>
      <Row style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          {back && (
            <FontAwesome5
              name={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
              size={mvs(20)}
              color={colors.iconColor}
            />
          )}
        </TouchableOpacity>

        {title ? (
          <Medium
            color={colors.iconColor}
            fontSize={mvs(20)}
            label={title}
            style={[styles.title]}
          />
        ) : (
          <></>
        )}
        {icon ? (
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <AntDesign
              name={'sharealt'}
              size={mvs(20)}
              color={colors.iconColor}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </Row>
    </View>
  );
};
export default React.memo(AppHeader);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(15),
  },
  notificationbadge: {
    backgroundColor: colors.red,
    borderColor: colors.primary,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: mvs(6),
    right: mvs(-3),
    alignItems: 'center',
    justifyContent: 'center',
    height: mvs(15),
    width: mvs(15),
    borderRadius: mvs(7.5),
  },
  empty: {
    width: mvs(10),
  },
  title: {
    fontSize: mvs(18),
  },
  back: {},
});
