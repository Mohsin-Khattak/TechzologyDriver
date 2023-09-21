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
  cancleDelivery,
  getChangeStatus,
  getCompletedDeliveryDetails,
  getDeliveryAmount,
} from 'services/api/auth-api-actions';
import Medium from 'typography/medium-text';
import {UTILS} from 'utils';
import {Loader} from 'components/atoms/loader';
import {useAppSelector} from 'hooks/use-store';

const OrderDetails = props => {
  const colors = useTheme().colors;

  const {status, order, deliveryId} = props?.route?.params || {};
  console.log('check status=======>', status);
  const {userInfo} = useAppSelector(s => s?.user);
  const userId = userInfo?.id;
  const [orderConformationModal, setOrderConfirmationModal] =
    React.useState(false);
  const [deliveredModal, setDeliveredModal] = React.useState(false);
  const [changestatusLoading, setChangeStatusLoading] = React.useState(false);
  const origin = {latitude: 31.560249, longitude: 74.362284};
  const destination = {latitude: 31.556014, longitude: 74.354795};
  const [loading, setLoading] = React.useState(false);
  const [completeDeliveryHistory, setCompleteDeliveryHistory] = React.useState(
    [],
  );
  const [path, setPath] = React.useState([]);
  const orderId = completeDeliveryHistory?.order_details?.id;

  const [amount, setAmount] = React.useState({});

  const complete = completeDeliveryHistory;

  const CancleOrder = async () => {
    try {
      await cancleDelivery(orderId);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    }
  };

  const fetchCompleteHistoryDetails = async () => {
    try {
      setLoading(true);
      const res = await getCompletedDeliveryDetails(deliveryId);
      const amountRes = await getDeliveryAmount(deliveryId);
      setAmount(amountRes);
      setCompleteDeliveryHistory(res);
      const data = res?.DeliveryBoyPath?.map(x => ({
        latitude: x?.lat * 1,
        longitude: x?.lng * 1,
      }));
      setPath(data || []);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  const values = {
    order_id: order?.id,
    status:
      status === '0'
        ? 'picked_up'
        : status === '1'
        ? 'picked_up'
        : status === '2'
        ? 'on_the_way'
        : 'delivered',
    delivery_boy_id: userId,
    payment_type:
      complete?.order_details?.payment_type === 'Cash On Delivery'
        ? 'cash_on_delivery'
        : '',
  };
  const ChangeStatus = async () => {
    try {
      setChangeStatusLoading(true);
      const res = await getChangeStatus(values);
      setDeliveredModal(false);
      console.log(res);
    } catch (error) {
      console.log('Error in getChangeStatus====>', error);
      Alert.alert('Change Statuss Error', UTILS.returnError(error));
    } finally {
      setChangeStatusLoading(false);
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
                  label={t('pending')}
                  fontSize={mvs(10)}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <Like />
                </View>
                <Regular
                  color={colors.text}
                  label={t('confirm')}
                  fontSize={mvs(10)}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <Like />
                </View>
                <Regular
                  color={colors.text}
                  label={t('picked')}
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
                        status >= 0 ? colors.green : colors.halfGray,
                    },
                  ]}>
                  {status >= 0 && <TickTwo />}
                </View>
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
                  <MapDirections
                    waypoints={path}
                    origin={origin}
                    destination={destination}
                  />
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
                    <Regular label={t('amount_to_calculate')} />
                    <Regular label={`${'$'}${amount?.price}`} />
                  </Row>
                </View>
                <Row
                  style={{
                    backgroundColor: colors.skyBlue,
                    borderRadius: mvs(15),
                  }}>
                  {status === '3' || status === '2' ? (
                    <></>
                  ) : (
                    <PrimaryButton
                      onPress={() => setOrderConfirmationModal(true)}
                      containerStyle={{width: '45%'}}
                      title={t('cancel')}
                    />
                  )}
                  <PrimaryButton
                    onPress={() => setDeliveredModal(true)}
                    textStyle={{color: colors.primary}}
                    containerStyle={{
                      backgroundColor: colors.skyBlue,
                      width: status === '3' || status === '2' ? '100%' : '55%',
                    }}
                    title={
                      status === '2'
                        ? t('mark_as_on_the_way')
                        : status === '1'
                        ? t('mark_as_pickup')
                        : t('mark_as_delivered')
                    }
                  />
                </Row>
              </>
            )}
          </KeyboardAvoidScrollview>
        </>
      )}
      <OrderConfirmationModal
        onPressCancle={() => CancleOrder()}
        onClose={() => setOrderConfirmationModal(false)}
        visible={orderConformationModal}
      />
      <DeliveredModal
        onClose={() => setDeliveredModal(false)}
        visible={deliveredModal}
        changestatusLoading={changestatusLoading}
        setChangeStatusLoading={setChangeStatusLoading}
        onChangeStatus={() => {
          ChangeStatus(), setChangeStatusLoading(true);
        }}
      />
    </View>
  );
};
export default OrderDetails;
