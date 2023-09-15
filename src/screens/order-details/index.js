import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {useTheme} from '@react-navigation/native';
import {DeliveryThree, Like, ShoppingBag, Tick, TickTwo} from 'assets/icons';
import {PrimaryButton} from 'components/atoms/buttons';
import CustomMap from 'components/atoms/custom-map';
import MapDirections from 'components/atoms/custom-map-direction';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import DeliveredModal from 'components/molecules/modals/delivered-modal';
import OrderConfirmationModal from 'components/molecules/modals/order-conformation-modal';
import {Alert} from 'react-native';
import {
  getCompletedDeliveryDetails,
  getDeliveryAmount,
} from 'services/api/auth-api-actions';
import Medium from 'typography/medium-text';
import {UTILS} from 'utils';
import {Loader} from 'components/atoms/loader';

const OrderDetails = props => {
  const colors = useTheme().colors;

  const {status, order, deliveryId} = props?.route?.params || {};

  const data = order;
  const [orderConformationModal, setOrderConfirmationModal] =
    React.useState(false);
  const [deliveredModal, setDeliveredModal] = React.useState(false);
  const origin = {latitude: 31.560249, longitude: 74.362284};
  const destination = {latitude: 31.556014, longitude: 74.354795};
  const [loading, setLoading] = React.useState(false);
  const [completeDeliveryHistory, setCompleteDeliveryHistory] = React.useState(
    [],
  );
  const [amount, setAmount] = React.useState({});
  const complete = completeDeliveryHistory;

  const fetchCompleteHistoryDetails = async () => {
    try {
      setLoading(true);
      const res = await getCompletedDeliveryDetails(deliveryId);
      const amountRes = await getDeliveryAmount(deliveryId);
      setAmount(amountRes);
      setCompleteDeliveryHistory(res);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCompleteHistoryDetails();
  }, []);

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('order_details')} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <KeyboardAvoidScrollview
            contentContainerStyle={{paddingBottom: mvs(20)}}>
            <Row style={{marginTop: mvs(25)}}>
              <View style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <ShoppingBag />
                </View>
                <Regular
                  color={colors.text}
                  label={t('order_placed')}
                  fontSize={mvs(10)}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <Like />
                </View>
                <Regular
                  color={colors.text}
                  label={t('confirmed')}
                  fontSize={mvs(10)}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <DeliveryThree />
                </View>
                <Regular
                  color={colors.text}
                  label={t('on_delivery')}
                  fontSize={mvs(10)}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <Tick />
                </View>
                <Regular
                  color={colors.text}
                  label={t('delivered')}
                  fontSize={mvs(10)}
                />
              </View>
            </Row>
            <View style={{paddingHorizontal: mvs(20), marginTop: mvs(20)}}>
              <View style={styles.line} />
              <Row>
                <View
                  style={[
                    styles.circle,
                    {
                      borderRadius: 9,
                      backgroundColor:
                        status >= 1 ? colors.green : colors.halfGray,
                    },
                  ]}>
                  {status >= 1 && <TickTwo />}
                </View>
                <View
                  style={[
                    styles.circle,
                    {
                      borderRadius: 9,
                      backgroundColor:
                        status >= 2 ? colors.green : colors.halfGray,
                    },
                  ]}>
                  {status >= 2 && <TickTwo />}
                </View>
                <View
                  style={[
                    styles.circle,
                    {
                      borderRadius: 9,
                      backgroundColor:
                        status >= 3 ? colors.green : colors.halfGray,
                    },
                  ]}>
                  {status >= 3 && <TickTwo />}
                </View>
                <View
                  style={[
                    styles.circle,
                    {
                      borderRadius: 9,
                      backgroundColor:
                        status >= 4 ? colors.green : colors.halfGray,
                    },
                  ]}>
                  {status >= 4 && <TickTwo />}
                </View>
              </Row>
            </View>

            <View
              style={{
                ...styles.innerContainer,
                backgroundColor: colors.downColor,
              }}>
              <Row>
                <View style={{width: '45%'}}>
                  <Regular
                    color={colors.text}
                    style={styles.title}
                    label={t('order_code')}
                  />
                  <Regular
                    fontSize={mvs(12)}
                    label={complete?.order_details?.code}
                  />
                </View>
                <View style={{width: '45%'}}>
                  <Regular
                    color={colors.text}
                    style={styles.title}
                    label={t('shipping_method')}
                  />
                  <Regular
                    fontSize={mvs(12)}
                    label={complete?.order_details?.shipping_type}
                  />
                </View>
              </Row>
              <Row>
                <View style={{width: '45%'}}>
                  <Regular
                    color={colors.text}
                    style={styles.title}
                    label={t('order_date')}
                  />
                  <Regular
                    fontSize={mvs(12)}
                    label={complete?.date_developer}
                  />
                </View>
                <View style={{width: '45%'}}>
                  <Regular
                    color={colors.text}
                    style={styles.title}
                    label={t('payment_method')}
                  />
                  <Regular
                    fontSize={mvs(12)}
                    label={complete?.order_details?.payment_type}
                  />
                </View>
              </Row>
              <Row>
                <View style={{width: '45%'}}>
                  <Regular
                    color={colors.text}
                    style={styles.title}
                    label={t('payment_status')}
                  />
                  <Row>
                    <Regular
                      fontSize={mvs(12)}
                      label={complete?.order_details?.payment_status}
                    />
                    <View
                      style={[
                        styles.paidContainer,
                        {
                          backgroundColor:
                            complete?.order_details?.payment_status === 'paid'
                              ? colors.green
                              : colors.red,
                        },
                      ]}>
                      <TickTwo />
                    </View>
                  </Row>
                </View>
                <View style={{width: '45%'}}>
                  <Regular
                    color={colors.text}
                    style={styles.title}
                    label={t('delivery_status')}
                  />
                  <Regular
                    fontSize={mvs(12)}
                    label={complete?.order_details?.delivery_status}
                  />
                </View>
              </Row>
              <Row>
                <View style={{width: '45%'}}>
                  <Regular
                    color={colors.text}
                    style={styles.title}
                    label={t('shipping_address')}
                  />
                  <Row style={{justifyContent: 'flex-start'}}>
                    <Regular fontSize={mvs(12)} label={t('name')} />
                    <Regular
                      color={colors.text}
                      style={styles.addressTitle}
                      fontSize={mvs(12)}
                      label={complete?.shipping_adress_developer?.name}
                    />
                  </Row>
                  <Row style={{justifyContent: 'flex-start'}}>
                    <Regular fontSize={mvs(12)} label={t('email')} />
                    <Regular
                      color={colors.text}
                      style={styles.addressTitle}
                      fontSize={mvs(12)}
                      label={complete?.shipping_adress_developer?.email}
                    />
                  </Row>
                  <Row style={{justifyContent: 'flex-start'}}>
                    <Regular fontSize={mvs(12)} label={t('address')} />
                    <Regular
                      color={colors.text}
                      style={styles.addressTitle}
                      fontSize={mvs(12)}
                      label={complete?.shipping_adress_developer?.address}
                    />
                  </Row>
                  <Row style={{justifyContent: 'flex-start'}}>
                    <Regular fontSize={mvs(12)} label={t('country')} />
                    <Regular
                      color={colors.text}
                      style={styles.addressTitle}
                      fontSize={mvs(12)}
                      label={complete?.shipping_adress_developer?.country}
                    />
                  </Row>
                  <Row style={{justifyContent: 'flex-start'}}>
                    <Regular fontSize={mvs(12)} label={t('phone')} />
                    <Regular
                      color={colors.text}
                      style={styles.addressTitle}
                      fontSize={mvs(12)}
                      label={complete?.shipping_adress_developer?.phone}
                    />
                  </Row>
                  <Row style={{justifyContent: 'flex-start'}}>
                    <Regular fontSize={mvs(12)} label={t('postal_code')} />
                    <Regular
                      color={colors.text}
                      style={styles.addressTitle}
                      fontSize={mvs(12)}
                      label={complete?.shipping_adress_developer?.postal_code}
                    />
                  </Row>
                </View>
                <View style={{width: '45%'}}>
                  <Regular
                    color={colors.text}
                    style={styles.title}
                    label={t('total_amount')}
                  />
                  <Regular
                    fontSize={mvs(12)}
                    label={`${'$ '}${complete?.order_details?.grand_total}`}
                  />
                </View>
              </Row>
            </View>

            {status === '4' ? (
              <View style={styles.mapContainer}>
                <CustomMap>
                  <MapDirections origin={origin} destination={destination} />
                </CustomMap>
              </View>
            ) : (
              <>
                <Medium
                  color={colors.text}
                  style={{paddingVertical: mvs(10)}}
                  label={t('ordered_product')}
                />
                <Row style={styles.orderContainer}>
                  <View style={styles.idContainer} />
                  <View
                    style={{
                      ...styles.orderInnerContainer,
                      backgroundColor: colors.downColor,
                    }}>
                    <Row>
                      <Regular
                        style={{flex: 1}}
                        color={colors.text}
                        fontSize={mvs(12)}
                        label={amount?.product?.name}
                      />
                      <Regular fontSize={mvs(12)} label={amount?.price} />
                    </Row>

                    <Regular
                      color={colors.text}
                      fontSize={mvs(12)}
                      label={amount?.quantity}
                    />
                  </View>
                </Row>
                <View
                  style={{
                    ...styles.innerContainer,
                    backgroundColor: colors.downColor,
                  }}>
                  <Row>
                    <Regular
                      color={colors.text}
                      fontSize={mvs(12)}
                      label={t('sub_total')}
                    />
                    <Regular
                      fontSize={mvs(12)}
                      label={`${'$'}${amount?.price}`}
                    />
                  </Row>
                  <Row>
                    <Regular
                      color={colors.text}
                      fontSize={mvs(12)}
                      label={t('tax')}
                    />
                    <Regular
                      fontSize={mvs(12)}
                      label={`${'$'}${amount?.tax}`}
                    />
                  </Row>
                  <Row>
                    <Regular
                      color={colors.text}
                      fontSize={mvs(12)}
                      label={t('shipping_cost')}
                    />
                    <Regular
                      fontSize={mvs(12)}
                      label={`${'$'}${amount?.shipping_cost}`}
                    />
                  </Row>
                  <Row>
                    <Regular
                      color={colors.text}
                      fontSize={mvs(12)}
                      label={t('discount')}
                    />
                    <Regular
                      fontSize={mvs(12)}
                      label={`${'$'}${amount?.product?.discount}`}
                    />
                  </Row>
                  <View style={styles.innerLine} />
                  <Row>
                    <Regular
                      color={colors.text}
                      fontSize={mvs(12)}
                      label={t('grand_total')}
                    />
                    <Regular
                      fontSize={mvs(12)}
                      label={`${'$'}${amount?.price}`}
                    />
                  </Row>
                </View>
                <View
                  style={{
                    padding: mvs(20),
                    backgroundColor: colors.skyBlue,
                    marginVertical: mvs(15),
                    borderRadius: mvs(15),
                  }}>
                  <Row>
                    <Regular label={'Amount To Collect'} />
                    <Regular label={`${'$'}${amount?.price}`} />
                  </Row>
                </View>
                <Row
                  style={{
                    backgroundColor: colors.skyBlue,
                    borderRadius: mvs(15),
                  }}>
                  <PrimaryButton
                    onPress={() => setOrderConfirmationModal(true)}
                    containerStyle={{width: '45%'}}
                    title={'Cancle'}
                  />
                  <PrimaryButton
                    onPress={() => setDeliveredModal(true)}
                    textStyle={{color: colors.primary}}
                    containerStyle={{
                      backgroundColor: colors.skyBlue,
                      width: '55%',
                    }}
                    title={'Mark As Delivered'}
                  />
                </Row>
              </>
            )}
          </KeyboardAvoidScrollview>
        </>
      )}
      <OrderConfirmationModal
        onClose={() => setOrderConfirmationModal(false)}
        visible={orderConformationModal}
      />
      <DeliveredModal
        onClose={() => setDeliveredModal(false)}
        visible={deliveredModal}
      />
    </View>
  );
};
export default OrderDetails;
