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
import Medium from 'typography/medium-text';
const UpdatedProfileModal = ({
  style,
  email,
  visible = false,
  value,
  setAddressAddedModal,
  userInfo,
  isSubmited,
  onClose = item => {},
}) => {
  const {t} = i18n;
  const [loading, setLoading] = React.useState(false);

  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <PrimaryInput
          placeholder={t('address')}
          // value={values.email}
        />
        <PrimaryInput placeholder={t('country')} />
        <PrimaryInput placeholder={t('state')} />
        <PrimaryInput placeholder={t('city')} />
        <PrimaryInput placeholder={t('postal_code')} />
        <PrimaryInput placeholder={t('phone')} />

        <PrimaryButton
          onPress={() => {
            setAddressAddedModal(true), onClose();
          }}
          title={t('add')}
        />
        <PrimaryButton
          onPress={() => onClose()}
          containerStyle={{
            marginTop: mvs(15),
            backgroundColor: colors.white,
            borderWidth: mvs(1),
            borderColor: colors.primary,
          }}
          textStyle={{color: colors.primary}}
          title={t('close')}
        />
      </View>
    </ModalWrapper>
  );
};
export default UpdatedProfileModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: colors.white,
    padding: mvs(20),
    borderRadius: mvs(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOk: {
    width: mvs(100),
    borderRadius: mvs(30),
    height: mvs(40),
    marginTop: mvs(35),
  },
});
