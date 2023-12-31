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
      dispatch(setUserInfo(res?.user));
      navigate('Drawer')
    } catch (error: any) {
      console.log('error in login', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const uploadImage = (
  data: any,
  setLoading: (bool: boolean) => void
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.update_image, data);
      // console.log('image api res====>', res);

      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.user || []));
    } catch (error: any) {
      console.log('error in updateProfile', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const updateProfile = (
  data: any,
  setLoading: (bool: boolean) => void
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.update_profile, data);
      console.log('res::::', res);
      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.user || []));
    } catch (error: any) {
      console.log('error in updateProfile', UTILS.returnError(error));
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
export const isActiveStatus = (values: any) => postData(URLS.auth.user_active, values);
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
export const getCancelledDelivery = (userId: any, dateRange: any, paymentType: any, pageNumber: any) => {
  let url = `${URLS.dashboard.get_cancle_delivery}${userId}?date_range=${dateRange}&payment_type=${paymentType}&page=${pageNumber}`;
  return getData(url);
};
export const getCompletedDeliveryDetails = (deliveryId: any) => getData(`${URLS.dashboard.get_completed_delivery_history}${deliveryId}`)
export const getDeliveryAmount = (deliveryId: any) => getData(`${URLS.dashboard.get_amount_delivery}${deliveryId}`)
export const getPendingDelivery = (userId: any, pageNumber: any) => {
  let url = `${URLS.dashboard.get_pending_delivery}${userId}?page=${pageNumber}`;
  return getData(url);
};
export const getConfirmDelivery = (userId: any, pageNumber: any) => {
  let url = `${URLS.dashboard.get_confirm_delivery}${userId}?page=${pageNumber}`;
  return getData(url);
};
export const getOnTheWayDelivery = (userId: any, pageNumber: any) => {
  let url = `${URLS.dashboard.get_on_the_way}${userId}?page=${pageNumber}`;
  return getData(url);
};
export const getPickedUpDelivery = (userId: any, pageNumber: any) => {
  let url = `${URLS.dashboard.get_picked_up}${userId}?page=${pageNumber}`;
  return getData(url);
};

export const getChangeStatus = (values: any) => postData(URLS.dashboard.change_status, values)

export const getDirection = (orderId: any, latitude: any, longitude: any) => getData(`${URLS.direction.get_direction}${orderId}?latitude=${latitude}&longitude=${longitude}`)

export const getDistance = async (lat1: any, lat2: any, lon1: any, lon2: any) => {
  console.log("lat1, lat2, lon1, lon2", lat1, lat2, lon1, lon2);

  try {
    var km = 1;
    let time = 0;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${lat1},${lon1}&destinations=${lat2},${lon2}&key=AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98`
    );
    if (response?.data?.status === "OK") {
      console.log("Distance is ");
      km = response?.data?.rows[0]?.elements[0]?.distance?.value / 1000;
      time = response?.data?.rows[0]?.elements[0]?.duration?.text;

    }
    return { km, time };

  } catch (error) {
    throw new Error(UTILS.returnError(error));
  }
}




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
