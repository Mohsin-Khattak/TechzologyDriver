import {colors} from 'config/colors';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';

import i18n from 'translation';
import PrimaryInput from 'components/atoms/inputs';
import {mvs} from 'config/metrices';
import {ModalWrapper} from 'components/atoms/modal-wrapper';

import {PrimaryButton} from 'components/atoms/buttons';
import {UTILS} from 'utils';
import {CrossModal} from 'assets/icons';
import {Row} from 'components/atoms/row';
import Regular from 'typography/regular-text';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {useTheme} from '@react-navigation/native';
const OrderConfirmationModal = ({
  style,
  email,
  visible = false,
  value,
  setValue,
  userInfo,
  isSubmited,
  onClose = item => {},
}) => {
  const {t} = i18n;
  const [loading, setLoading] = React.useState(false);
  const colors = useTheme().colors;

  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={{...styles.contentContainerStyle, style}}>
      <View style={{...styles.container, backgroundColor: colors.downColor}}>
        <Medium
          color={colors.text}
          fontSize={mvs(12)}
          label={t('Are You Sure To Request Cancellation')}
        />
        <View style={styles.otp}>
          <Row>
            <PrimaryButton
              onPress={() => onClose()}
              title={t('close')}
              containerStyle={{
                marginTop: mvs(20),
                width: '40%',
                borderRadius: mvs(30),
              }}
            />
            <PrimaryButton
              title={t('confirm')}
              containerStyle={{
                marginTop: mvs(20),
                width: '40%',
                borderRadius: mvs(30),
              }}
            />
          </Row>
        </View>
      </View>
    </ModalWrapper>
  );
};
export default OrderConfirmationModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: mvs(20),
  },
  container: {
    // height: mvs(300),
    backgroundColor: colors.white,
    padding: mvs(20),
    borderRadius: mvs(20),
    alignItems: 'center',
  },

  header: {
    height: mvs(3),
    borderRadius: mvs(5),
    width: mvs(104),
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    marginBottom: mvs(20),
  },
  msg: {
    textAlign: 'center',
    alignSelf: 'center',
    width: mvs(250),
    fontSize: mvs(20),
  },
  button: {
    paddingHorizontal: mvs(30),
    marginBottom: mvs(20),
  },
  cross: {padding: mvs(20), alignSelf: 'flex-end', position: 'absolute'},
});
