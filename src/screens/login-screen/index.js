import {PrimaryButton} from 'components/atoms/buttons';
import {height, mvs} from 'config/metrices';
import {Formik} from 'formik';

import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {SplashIcon} from 'assets/icons';
import {loginJson} from 'assets/lottie';
import LottieAnimation from 'components/atoms/animation';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';

import {onLogin} from 'services/api/auth-api-actions';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import {signinFormValidation} from 'validations';
import styles from './styles';
import {useAppDispatch} from 'hooks/use-store';
const LoginScreen = props => {
  const colors = useTheme().colors;
  const dispatch = useAppDispatch();

  const {t} = i18n;
  const initialValues = {
    email: '',
    password: '',
  };
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async values => {
    try {
      setLoading(true);
      // await dispatch(onLogin(values, setLoading, props));
      navigate('Drawer');
    } catch (error) {
      console.log('error=>', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <View
        style={{
          ...styles.backgroundContainer,
          backgroundColor: colors.background,
        }}>
        <View
          style={{
            paddingTop: mvs(76),
            paddingBottom: height / 5,
            backgroundColor: colors.primary,
          }}>
          <SplashIcon style={{alignSelf: 'center'}} />
        </View>

        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={signinFormValidation}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View style={styles.mainInnerContainer}>
              <View
                style={{
                  ...styles.inputContainer,
                  backgroundColor: colors.background,
                }}>
                <KeyboardAvoidScrollview>
                  <LottieAnimation style={styles.lottie} src={loginJson} />
                  <Bold
                    color={colors.text}
                    style={styles.loginTexhzologyContainer}
                    label={t('login_in_to_techzology_ecommerces')}
                  />
                  <PrimaryInput
                    keyboardType={'email-address'}
                    placeholder={t('email')}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={
                      touched?.email && errors?.email
                        ? `${t(errors?.email)}`
                        : undefined
                    }
                  />
                  <PrimaryInput
                    isPassword
                    placeholder={t('password')}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    errorStyle={{marginBottom: 0}}
                    error={
                      touched?.password && errors?.password
                        ? `${t(errors?.password)}`
                        : undefined
                    }
                  />

                  <TouchableOpacity
                    style={{alignSelf: 'flex-end', marginBottom: mvs(15)}}
                    onPress={() => navigate('ForgotPassword')}>
                    <Bold color={colors.text} label={t('Forgot Password?')} />
                  </TouchableOpacity>
                  <PrimaryButton
                    loading={loading}
                    onPress={handleSubmit}
                    title={t('login')}
                  />
                  <Regular
                    color={colors.text}
                    label={t('or_create_a_new_account')}
                    fontSize={mvs(10)}
                    style={{alignSelf: 'center', marginTop: mvs(12)}}
                  />
                  <PrimaryButton
                    title={t('signup')}
                    onPress={() => navigate('Signup')}
                    containerStyle={{
                      backgroundColor: colors.green,
                      marginTop: mvs(12),
                    }}
                  />
                  {/* <Regular
                    color={colors.text}
                    label={t('login_with')}
                    fontSize={mvs(10)}
                    style={{alignSelf: 'center', marginTop: mvs(12)}}
                  />
                  <Row style={{paddingHorizontal: mvs(35), marginTop: mvs(12)}}>
                    <TouchableOpacity>
                      <Regular color={colors.text} label={t('Google')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Regular color={colors.text} label={t('Facebook')} />
                    </TouchableOpacity>
                  </Row> */}
                </KeyboardAvoidScrollview>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
export default LoginScreen;
