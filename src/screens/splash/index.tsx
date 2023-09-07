import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SplashIcon } from 'assets/icons';

import React from 'react';
import { ImageBackground, View } from 'react-native';
import { getNotifications, getUserInfo } from 'services/api/auth-api-actions';
import i18n from 'translation';
import { UTILS } from 'utils';
import { STORAGEKEYS } from '../../config/constants';
import {
  setLanguage,
  setLocation,
  setUserInfo,
} from '../../store/reducers/user-reducer';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { useAppDispatch } from 'hooks/use-store';
import { SplashImg } from 'assets/images';

type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = (props: props) => {
  const colors = useTheme().colors;

  const { navigation } = props;
  const dispatch = useAppDispatch();
  const loadNotifications = async () => {
    try {
      dispatch(getNotifications());
    } catch (error) {
      console.log('error=>', error);
    }
  };
  React.useEffect(() => {
    (async () => {
      try {
        let screen: any = 'Login';
        UTILS.get_current_location(
          position => {
            dispatch(
              setLocation({
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
              }),
            );
          },
          error => { },
        );
        UTILS.getItem(STORAGEKEYS.lang).then((lang: any) => {
          i18n.changeLanguage(lang);
          dispatch(setLanguage(lang ?? 'en'));
        });

        UTILS.getItem(STORAGEKEYS.token).then(async (token: any) => {
          if (token) {
            try {
              screen = 'Drawer';

            } catch (error) {
              console.log('error', error);
            }
          }
          setTimeout(() => {
            navigation?.replace(screen);
          }, 2000);
        });
      } catch (error) { }
    })();
  }, []);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: colors.primary,
    }}>
      <ImageBackground style={{ width: '100%', height: '100%' }} source={SplashImg}>

      </ImageBackground>

    </View>
  );
};
export default Splash;
