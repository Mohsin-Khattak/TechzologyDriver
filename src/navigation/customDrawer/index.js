import * as React from 'react';
import {Alert, ImageBackground, View} from 'react-native';
import styles from './styles';

import {useTheme} from '@react-navigation/native';
import {
  Carttt,
  Heart,
  Location,
  Refund,
  Shop,
  UserEdit,
  Wallet,
} from 'assets/icons';
import {IconButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {t} from 'i18next';
import {navigate, resetStack} from 'navigation/navigation-ref';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {LogOut} from 'assets/icons/app-icons';
import {logout} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';
import {
  CancleDrawer,
  CoinDrawer,
  CompleteDrawer,
  HomeDrawer,
  PendingDrawer,
  UserDrawer,
} from 'assets/icons/drawer-icon';

const CustomDrawer = props => {
  const colors = useTheme().colors;
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector(s => s?.user);
  const user = userInfo;

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
        {/* <Image source={{uri: user?.profileImage}} style={styles.userImage} /> */}
      </ImageBackground>

      <Bold color={colors.text} label={user?.name} style={styles.userName} />
      <Regular
        color={colors.text}
        style={{alignSelf: 'center'}}
        label={user?.email}
      />
      <View style={styles.line} />
      <View style={styles.innerContainer}>
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
          onPress={() => navigate('RefundStatus')}
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
