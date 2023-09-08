import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';

import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {useTheme} from '@react-navigation/native';
import {Delivery} from 'assets/icons';
import DeliveryPendingCard from 'components/molecules/delivery-pending-card';

const PendingDelivery = props => {
  const colors = useTheme().colors;

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
    <DeliveryPendingCard
      item={item}
      onPressDirection={() => navigate('Tracking')}
      onPress={() =>
        navigate('OrderDetails', {
          status: '3',
        })
      }
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('Completed Delivery')} />
      <Row style={{paddingHorizontal: mvs(20), justifyContent: 'flex-start'}}>
        <View
          style={{
            width: mvs(20),
            height: mvs(20),
            backgroundColor: colors.skyBlue,
            borderRadius: mvs(10),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Delivery />
        </View>
        <Regular
          fontSize={mvs(12)}
          style={{marginLeft: mvs(10)}}
          label={'On The Way (16)'}
        />
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
export default PendingDelivery;
