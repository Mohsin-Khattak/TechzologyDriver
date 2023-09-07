import {colors} from 'config/colors';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {mvs} from 'config/metrices';
import i18n from 'translation';

import {PrimaryButton} from 'components/atoms/buttons';
import Bold from 'typography/bold-text';
import {useTheme} from '@react-navigation/native';
const OrderPlacedModal = ({
  style,
  email,
  visible = false,
  value,
  setValue,
  userInfo,
  isSubmited,
  onClose = item => {},
}) => {
  const colors = useTheme().colors;

  const {t} = i18n;
  const [loading, setLoading] = React.useState(false);

  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={{...styles.container, backgroundColor: colors.downColor}}>
        <Bold color={colors.text} label={t('your_order_has_been_placed.')} />

        <View style={styles.otp}>
          <PrimaryButton
            onPress={() => {
              onClose(), navigate('OrderHistory');
            }}
            title={t('ok')}
            containerStyle={{
              marginTop: mvs(20),
              width: mvs(100),
              borderRadius: mvs(30),
            }}
          />
        </View>
      </View>
    </ModalWrapper>
  );
};
export default OrderPlacedModal;
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
