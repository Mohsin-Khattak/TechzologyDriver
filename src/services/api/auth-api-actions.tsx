import axios from 'axios';
import { STORAGEKEYS } from 'config/constants';
import { navigate, resetStack } from 'navigation/navigation-ref';
import { Alert } from 'react-native';
import { AppDispatch, RootState } from 'store';
import { UTILS } from 'utils';
import { getData, postData } from './';
import {
  setLocations,
  setNotifications,
  setUserInfo,
  setWallet,
} from './../../store/reducers/user-reducer';
import { URLS } from './api-urls';
export const getUserInfo = () => {
  return getData(URLS.auth.get_user_info);
};
export const onLogin = (
  values: any,
  setLoading: (bool: boolean) => void,

) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.login, values);
      await UTILS.setItem(STORAGEKEYS.token, res?.access_token);
      await UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      console.log('res of onLogin=>', res);
      dispatch(setUserInfo(res));
      navigate('Drawer')
    } catch (error: any) {
      console.log('error in login', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onSignup = (values: any) => postData(URLS.auth.signup, values);
export const verifyOtp = (values: any) => postData(URLS.auth.otp_verify, values);
export const resendVerifyOtp = (values: any) => postData(URLS.auth.resend_otp_verify, values);
export const forgotPassword = (values: any) => postData(URLS.auth.forget_password, values);
export const resendPasswordCode = (values: any) => postData(URLS.auth.resend_password_code, values);
export const changePassword = (values: any) => postData(URLS.auth.change_password, values);
export const logout = () => getData(URLS.auth.logout);



//////////get dashboard/////////////////
export const getDashBoard = (userId: any) => getData(`${URLS.dashboard.get_dashboard}${userId}`)
export const getCollection = (userId: any) => getData(`${URLS.dashboard.get_collection}${userId}`)
export const getEarning = (userId: any) => getData(`${URLS.dashboard.get_earning}${userId}`)


export const getCollectionHistory = (userId: any, pageNumber: any) => {
  let url = `${URLS.dashboard.get_collection_history}${userId}?page=${pageNumber}`;
  return getData(url);
};
export const getCompletedDelivery = (userId: any, dateRange: any, paymentType: any, pageNumber: any) => {
  let url = `${URLS.dashboard.get_completed_delivery}${userId}?date_range=${dateRange}&payment_type=${paymentType}&page=${pageNumber}`;
  return getData(url);
};
export const getCompletedDeliveryDetails = (deliveryId: any) => getData(`${URLS.dashboard.get_completed_delivery_history}${deliveryId}`)


//export const getCompletedDelivery = (userId: any, dateRange: any, paymentType: any, pageNumber: any) => getData(`${URLS.dashboard.get_completed_delivery}${userId}?date_range=${dateRange}&payment_type=${paymentType}&page=${pageNumber}`)

//// add amount///

/// Wallet ///

export const getLocations = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(URLS.auth.locations);
      dispatch(setLocations(res?.data));
    } catch (error) {
      console.log('error', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    }
  };
};
export const onUpdateProfile = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      delete values?.role;
      delete values?.roles;
      const res = await postData(URLS.auth.update_profile, values);
      console.log('res of onUpdateProfile=>', res);

      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.user));
      Alert.alert('Success', 'Save changes successfully');
    } catch (error: any) {
      console.log('error in onUpdateProfile', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onUpdatePassword = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.update_password, values);
      console.log('res of onUpdatePassword=>', res);
      Alert.alert('Password Changed Successfully');
      dispatch(onLogoutPress());
    } catch (error: any) {
      console.log('error in onSignupPress', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};

export const onLogoutPress = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      // await logout();
      await UTILS.clearStorage();
      dispatch(setUserInfo(null));
      resetStack('Splash');
    } catch (error: any) {
      console.log('error in onDeleteTask', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    }
  };
};

export const getPaymentUri = async (data: any) =>
  axios.post('https://secure.clickpay.com.sa/payment/request', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'SNJNL9M6RH-J69NMZLB9Z-GGNBNKDBTJ',
    },
  });
export const getPaymentTransationStatus = async (data: any) =>
  axios.post('https://secure.clickpay.com.sa/payment/query', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'SNJNL9M6RH-J69NMZLB9Z-GGNBNKDBTJ',
    },
  });

///Notifications///
export const getNotifications = (
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await postData(URLS.auth.get_notification);
      dispatch(setNotifications(res?.notifications || []));
    } catch (error: any) {
      console.log('error in notification', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};
