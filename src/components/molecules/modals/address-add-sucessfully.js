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
const AddressAddedSucessfully = ({
  style,
  visible = false,
  onClose = item => {},
}) => {
  const {t} = i18n;
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <Medium
          style={{textAlign: 'center'}}
          numberOfLines={2}
          label={t('your_new_address_had_been_added')}
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
export default AddressAddedSucessfully;
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
    paddingHorizontal: mvs(30),
  },
  btnOk: {
    width: mvs(100),
    borderRadius: mvs(30),
    height: mvs(40),
    marginTop: mvs(35),
  },
});
