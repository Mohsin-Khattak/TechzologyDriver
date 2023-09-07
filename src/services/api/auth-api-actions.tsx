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
export const banners = () => getData(URLS.app.get_banners);
export const getFeaturedCategories = () => getData(URLS.app.get_featured_categories);
export const getAllFeaturedProducts = () => getData(URLS.app.get_all_featured_products);
export const getAllProducts = (pageNumber: any) => {
  let url = `${URLS.app.get_all_products}?page=${pageNumber}`;
  return getData(url);
};
export const getProductDetails = (productId: any) => getData(`${URLS.app.get_product_details}${productId}`
)
export const getAllCategories = () => getData(URLS.categories.get_all_categories);
export const getAllFeaturedCategories = () => getData(URLS.categories.get_all_categories_featured)

//////////add addresss/////////////////
export const getAddress = (userId: any) => getData(`${URLS.address.get_address}${userId}`)
export const deleteAddress = (addressId: any) => getData(`${URLS.address.delete_address}${addressId}`)
export const addAddress = (newAddress: any) => postData(`${URLS.address.add_address, newAddress}`)
export const getCities = () => getData(URLS.address.get_cities)
export const getAllProductCategoryPaginated = (categoryId: any, pageNumber: any,) => {
  let url = `${URLS.categories.get_all_products_of_category_paginated}${categoryId}?page=${pageNumber}&name=`;
  return getData(url);
};




//// add amount///
export const onAddAmount = (values: any) => {
  return postData(URLS.wallet.add_amount, values);
};
/// Wallet ///
export const getWallet = (values: any, setLoading: (bool: boolean) => void) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.wallet.get_wallet, values);

      dispatch(setWallet(res || {}));

    } catch (error: any) {
      console.log('error in wallet', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
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
