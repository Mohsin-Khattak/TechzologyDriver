import * as React from 'react';
import {Alert, Image, ImageBackground, View} from 'react-native';
import styles from './styles';

import {useTheme} from '@react-navigation/native';
import {LogOut} from 'assets/icons/app-icons';
import {
  CancleDrawer,
  CoinDrawer,
  CompleteDrawer,
  HomeDrawer,
  PendingDrawer,
  UserDrawer,
} from 'assets/icons/drawer-icon';
import {IconButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {t} from 'i18next';
import {navigate, resetStack} from 'navigation/navigation-ref';
import {isActiveStatus, logout} from 'services/api/auth-api-actions';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import {Language} from 'assets/icons';
import {Row} from 'components/atoms/row';
import {TouchableOpacity} from 'react-native';
import {setUserInfo} from 'store/reducers/user-reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGEKEYS} from 'config/constants';

const CustomDrawer = props => {
  const colors = useTheme().colors;
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector(s => s?.user);
  const user = userInfo;

  const [active, setActive] = React.useState('0');
  console.log('userInfo userInfo=======>', userInfo);
  const logOut = async () => {
    try {
      setLoading(true);
      const res = await logout();
      Alert.alert(res?.message);
      await UTILS.clearStorage();
      resetStack('Login');
    } catch (error) {
      console.log('Error===>', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  const ChangeStatus = async () => {
    try {
      const res = await isActiveStatus({
        is_active: userInfo?.is_active ? 0 : 1,
      });
      await AsyncStorage.setItem(
        STORAGEKEYS.user,
        JSON.stringify(res?.updatedData),
      );
      dispatch(setUserInfo(res?.updatedData));
      console.log(' resp==========>', res);
    } catch (error) {
      console.log('Error===>', UTILS.returnError(error));
      Alert.alert('Error-===============>', error);
    }
  };

  const {navigation} = props;
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo
          size={25}
          name="cross"
          color={colors.white}
          style={styles.cross}
        />
      </TouchableOpacity> */}

      <ImageBackground
        source={{
          uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
        }}
        style={styles.imageStyle}
        borderRadius={mvs(100)}>
        <Image source={{uri: user?.avatar_original}} style={styles.userImage} />
      </ImageBackground>

      <Bold color={colors.text} label={user?.name} style={styles.userName} />
      <Regular
        color={colors.text}
        style={{alignSelf: 'center'}}
        label={user?.email}
      />
      <View style={styles.line} />
      <View style={styles.innerContainer}>
        <Row style={{alignItems: 'center', paddingHorizontal: mvs(15)}}>
          <Regular label={'Active'} />
          <View style={styles.activeInnerConatiner}>
            <TouchableOpacity
              onPress={() => {
                ChangeStatus();
              }}
              style={{
                width: mvs(20),
                height: mvs(20),
                borderRadius: mvs(13),
                backgroundColor: userInfo?.is_active
                  ? colors.green
                  : colors.border,
                position: 'absolute',
                bottom: mvs(-4),
                alignSelf: userInfo?.is_active ? 'flex-end' : 'flex-start',
              }}></TouchableOpacity>
          </View>
        </Row>
        <IconButton
          onPress={() => navigate('Home')}
          title={t('dashboard')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<HomeDrawer />}
        />
        <IconButton
          onPress={() =>
            props?.navigation?.replace('Drawer', {
              initialRoute: 'Delivery',
            })
          }
          title={t('completed_delivery')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<CompleteDrawer />}
        />
        <IconButton
          onPress={() => navigate('PendingDelivery', {pending: 'pending'})}
          title={t('pending_delivery')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<PendingDrawer />}
        />
        <IconButton
          onPress={() => navigate('CancelledDelivery')}
          title={t('cancelled_delivery')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<CancleDrawer />}
        />
        <IconButton
          onPress={() => navigate('Collection')}
          title={t('my_collection')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<CoinDrawer />}
        />

        <IconButton
          onPress={() =>
            props?.navigation?.replace('Drawer', {
              initialRoute: 'Me',
            })
          }
          title={t('profile')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<UserDrawer />}
        />
        <IconButton
          onPress={() => navigate('LanguageScreen')}
          title={t('change_language')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<Language />}
        />

        <IconButton
          onPress={logOut}
          title={t('Logout')}
          loading={loading}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<LogOut />}
        />
      </View>
    </View>
  );
};
export default CustomDrawer;
