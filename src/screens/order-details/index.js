import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {
  DeliveryThree,
  Like,
  Refund,
  RefundTwo,
  ShoppingBag,
  Tick,
  TickTwo,
} from 'assets/icons';
import Medium from 'typography/medium-text';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {PrimaryButton} from 'components/atoms/buttons';
import OrderConfirmationModal from 'components/molecules/modals/order-conformation-modal';
import CustomMap from 'components/atoms/custom-map';
import MapDirections from 'components/atoms/custom-map-direction';
import {navigate} from 'navigation/navigation-ref';
import {useTheme} from '@react-navigation/native';

const OrderDetails = props => {
  const colors = useTheme().colors;

  const {status, order} = props?.route?.params || {};
  console.log('status check===>', status);
  const data = order;
  const [orderConformationModal, setOrderConfirmationModal] =
    React.useState(false);
  const origin = {latitude: 31.560249, longitude: 74.362284};
  const destination = {latitude: 31.556014, longitude: 74.354795};
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('order_details')} />
      <KeyboardAvoidScrollview contentContainerStyle={{paddingBottom: mvs(20)}}>
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
                  backgroundColor: status >= 1 ? colors.green : colors.halfGray,
                },
              ]}>
              {status >= 1 && <TickTwo />}
            </View>
            <View
              style={[
                styles.circle,
                {
                  borderRadius: 9,
                  backgroundColor: status >= 2 ? colors.green : colors.halfGray,
                },
              ]}>
              {status >= 2 && <TickTwo />}
            </View>
            <View
              style={[
                styles.circle,
                {
                  borderRadius: 9,
                  backgroundColor: status >= 3 ? colors.green : colors.halfGray,
                },
              ]}>
              {status >= 3 && <TickTwo />}
            </View>
            <View
              style={[
                styles.circle,
                {
                  borderRadius: 9,
                  backgroundColor: status >= 4 ? colors.green : colors.halfGray,
                },
              ]}>
              {status >= 4 && <TickTwo />}
            </View>
          </Row>
        </View>

        <View
          style={{...styles.innerContainer, backgroundColor: colors.downColor}}>
          <Row>
            <View style={{width: '45%'}}>
              <Regular
                color={colors.text}
                style={styles.title}
                label={t('order_code')}
              />
              <Regular fontSize={mvs(12)} label={t('20210401-122325')} />
            </View>
            <View style={{width: '45%'}}>
              <Regular
                color={colors.text}
                style={styles.title}
                label={t('shipping_method')}
              />
              <Regular fontSize={mvs(12)} label={'Home Delivery'} />
            </View>
          </Row>
          <Row>
            <View style={{width: '45%'}}>
              <Regular
                color={colors.text}
                style={styles.title}
                label={t('order_date')}
              />
              <Regular fontSize={mvs(12)} label={t('04-08-2023')} />
            </View>
            <View style={{width: '45%'}}>
              <Regular
                color={colors.text}
                style={styles.title}
                label={t('payment_method')}
              />
              <Regular fontSize={mvs(12)} label={'Cash On Delivery'} />
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
                <Regular fontSize={mvs(12)} label={'Unpaid'} />
                <View
                  style={[
                    styles.paidContainer,
                    {
                      backgroundColor:
                        data?.payment_status === 'Paid'
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
              <Regular fontSize={mvs(12)} label={'Order placed'} />
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
                  label={'kushal chavan'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('email')} />
                <Regular
                  color={colors.text}
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'customer@example.com'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('address')} />
                <Regular
                  color={colors.text}
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'your location'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('country')} />
                <Regular
                  color={colors.text}
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'your country'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('phone')} />
                <Regular
                  color={colors.text}
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'03448422399'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('postal_code')} />
                <Regular
                  color={colors.text}
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'31313'}
                />
              </Row>
            </View>
            <View style={{width: '45%'}}>
              <Regular
                color={colors.text}
                style={styles.title}
                label={t('total_amount')}
              />
              <Regular fontSize={mvs(12)} label={'$130.00'} />
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
                    color={colors.text}
                    fontSize={mvs(12)}
                    label={'Shipping Container'}
                  />
                  <Regular fontSize={mvs(12)} label={'$120.000'} />
                </Row>
                <Row style={{marginTop: mvs(5)}}>
                  <Regular
                    color={colors.text}
                    fontSize={mvs(12)}
                    label={'2 x item'}
                  />
                  <TouchableOpacity>
                    <Row>
                      <Regular fontSize={mvs(12)} label={t('ask_for_refund')} />
                      <RefundTwo />
                    </Row>
                  </TouchableOpacity>
                </Row>
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
                <Regular fontSize={mvs(12)} label={'$12000.00'} />
              </Row>
              <Row>
                <Regular
                  color={colors.text}
                  fontSize={mvs(12)}
                  label={t('tax')}
                />
                <Regular fontSize={mvs(12)} label={'$0.00'} />
              </Row>
              <Row>
                <Regular
                  color={colors.text}
                  fontSize={mvs(12)}
                  label={t('shipping_cost')}
                />
                <Regular fontSize={mvs(12)} label={'$12.00'} />
              </Row>
              <Row>
                <Regular
                  color={colors.text}
                  fontSize={mvs(12)}
                  label={t('discount')}
                />
                <Regular fontSize={mvs(12)} label={'$10.00'} />
              </Row>
              <View style={styles.innerLine} />
              <Row>
                <Regular
                  color={colors.text}
                  fontSize={mvs(12)}
                  label={t('grand_total')}
                />
                <Regular fontSize={mvs(12)} label={'$1300.00'} />
              </Row>
            </View>
            <PrimaryButton
              onPress={() => {
                status === '3'
                  ? navigate('Tracking')
                  : setOrderConfirmationModal(true);
              }}
              containerStyle={{marginTop: mvs(25)}}
              title={t(status === '3' ? 'tracking' : 'cancle_order')}
            />
          </>
        )}
      </KeyboardAvoidScrollview>

      <OrderConfirmationModal
        onClose={() => setOrderConfirmationModal(false)}
        visible={orderConformationModal}
      />
    </View>
  );
};
export default OrderDetails;
