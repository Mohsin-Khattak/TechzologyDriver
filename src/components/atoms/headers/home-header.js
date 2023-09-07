import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import Regular from 'typography/regular-text';
import {SearchInput} from '../inputs';
import {Row} from '../row';
import {colors} from 'config/colors';
const HomeHeader = ({
  style = {},
  title,
  menu = false,
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
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          {menu && (
            <Entypo
              name={I18nManager.isRTL ? 'Menu' : 'menu'}
              size={mvs(40)}
              color={colors.iconColor}
            />
          )}
        </TouchableOpacity>
        {isSearch && (
          <View style={{width: '75%'}}>
            <SearchInput
              onChangeText={onChangeText}
              placeholder={placeholder}
            />
          </View>
        )}
        {notification ? (
          <TouchableOpacity onPress={() => navigate('Notifications')}>
            <MaterialCommunityIcons
              name="bell-ring-outline"
              size={mvs(30)}
              color={colors.iconColor}
              style={{marginTop: mvs(5)}}
            />
            {unreadNotification ? (
              <View style={styles.notificationbadge}>
                <Regular
                  label={unreadNotification}
                  fontSize={mvs(10)}
                  style={{lineHeight: mvs(14), color: colors.iconColor}}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </Row>
    </View>
  );
};
export default React.memo(HomeHeader);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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
    color: colors.white,
  },
  back: {},
});
