import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';

import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {useTheme} from '@react-navigation/native';
import {ClanderTwo, DeliveryTwo} from 'assets/icons';
import Entypo from 'react-native-vector-icons/Entypo';
import DeliveryCompletedCard from 'components/molecules/delivery-completed-card';

const DeliveryTab = props => {
  const colors = useTheme().colors;

  const [select, setSelect] = React.useState(true);
  const [selectByPayment, setSelectByPayment] = React.useState('All');
  const [selectByDelivery, setSelectByDelivery] = React.useState('All');
  const [deliverySelect, setDeliverySelect] = React.useState(true);
  const toggleOptions = () => {
    setSelect(!select);
  };
  const deliveryOptions = () => {
    setDeliverySelect(!deliverySelect);
  };

  const featuredCategories = [
    {
      id: '202104002-050430',
      date: '01-08-2023',
      payment_status: 'Unpaid',
      delivery_status: 'Placed',
      price: '$12.150',
    },
    {
      id: '202104002-050430',
      date: '01-08-2023',
      payment_status: 'Paid',
      delivery_status: 'Order Placed',
      price: '$12.150',
    },
    {
      id: '202104002-050430',
      date: '01-08-2023',
      payment_status: 'Unpaid',
      delivery_status: 'On the way',
      price: '$12.150',
    },
    {
      id: '202104002-050430',
      date: '01-08-2023',
      payment_status: 'UnPaid',
      delivery_status: 'Confirm',
      price: '$12.150',
    },
    {
      id: '202104002-050430',
      date: '01-08-2023',
      payment_status: 'Paid',
      delivery_status: 'Placed',
      price: '$12.150',
    },
  ];

  const renderCompletedDelivery = ({item, index}) => (
    <DeliveryCompletedCard
      item={item}
      onPress={() =>
        navigate('OrderDetails', {
          status: '4',
        })
      }
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('Completed Delivery')} />
      <Row style={{paddingHorizontal: mvs(20)}}>
        <Row style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => toggleOptions()}
            style={[styles.selectButton]}>
            <Row
              style={{
                paddingHorizontal: mvs(5),
              }}>
              <Regular
                color={colors.text}
                fontSize={mvs(12)}
                label={t(selectByPayment)}
              />
              <Entypo
                name={'chevron-small-right'}
                size={20}
                color={colors.text}
                style={{transform: [{rotate: select ? '0deg' : '90deg'}]}}
              />
            </Row>
          </TouchableOpacity>
          <View style={{marginLeft: mvs(10)}}>
            <ClanderTwo />
          </View>

          {!select ? (
            <View
              style={{
                ...styles.dotContainer,
                backgroundColor: colors.downColor,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('all');
                  setSelect(!select);
                }}>
                <Regular
                  fontSize={mvs(12)}
                  color={colors.text}
                  label={t('all')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('Today');
                  setSelect(!select);
                }}>
                <Regular
                  fontSize={mvs(12)}
                  style={{color: colors.text, marginTop: mvs(10)}}
                  label={t('Today')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('This Week');
                  setSelect(!select);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('This Week')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('This Month');
                  setSelect(!select);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('This Month')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Row>

        <Row style={styles.innerContainer}>
          <View style={{marginRight: mvs(10)}}>
            <DeliveryTwo />
          </View>
          <TouchableOpacity
            onPress={() => deliveryOptions()}
            style={styles.selectButton}>
            <Row
              style={{
                paddingHorizontal: mvs(5),
              }}>
              <Regular
                color={colors.text}
                fontSize={mvs(12)}
                label={t(selectByDelivery)}
              />
              <Entypo
                name={'chevron-small-right'}
                size={20}
                color={colors.text}
                style={{
                  transform: [{rotate: deliverySelect ? '0deg' : '90deg'}],
                }}
              />
            </Row>
          </TouchableOpacity>
          {!deliverySelect ? (
            <View
              style={{
                ...styles.deliverdContainer,
                backgroundColor: colors.downColor,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('all');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular color={colors.text} label={t('all')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('Cod');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  label={t('Cod')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('NON-COD');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('NON-COD')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Row>
      </Row>
      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={renderCompletedDelivery}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
    </View>
  );
};
export default DeliveryTab;
