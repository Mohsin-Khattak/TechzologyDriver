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
import {useTheme} from '@react-navigation/native';
const UpdatedPasswordModal = ({
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
      style={[styles.contentContainerStyle, style]}>
      <View style={{...styles.container, backgroundColor: colors.downColor}}>
        <Medium
          color={colors.text}
          label={t('your_password_has_been_updated')}
        />
        <PrimaryButton
          onPress={() => onClose()}
          containerStyle={styles.btnOk}
          title={t('ok')}
        />
      </View>
    </ModalWrapper>
  );
};
export default UpdatedPasswordModal;
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
    height: mvs(250),
    backgroundColor: colors.white,
    paddingVertical: mvs(20),
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
