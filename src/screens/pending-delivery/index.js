import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';

import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {useTheme} from '@react-navigation/native';
import {Delivery} from 'assets/icons';
import DeliveryPendingCard from 'components/molecules/delivery-pending-card';
import DeliveredModal from 'components/molecules/modals/delivered-modal';
import {UTILS} from 'utils';
import {
  getChangeStatus,
  getOnTheWayDelivery,
  getPendingDelivery,
  getPickedUpDelivery,
} from 'services/api/auth-api-actions';
import {Loader} from 'components/atoms/loader';
import {useAppSelector} from 'hooks/use-store';

const PendingDelivery = props => {
  const colors = useTheme().colors;
  const {userInfo} = useAppSelector(s => s?.user);
  const userId = userInfo?.id;

  const {picked, assign, pending} = props?.route?.params || {};
  const [deliveredModal, setDeliveredModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [order, setOrderId] = React.useState({});

  const [pageLoading, setPageLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [changestatusLoading, setChangeStatusLoading] = React.useState(false);

  const fetchData = async setDataLoading => {
    try {
      setLoading(true);
      setDataLoading(true);
      const apiEndPoint = picked
        ? getPickedUpDelivery
        : assign
        ? getPendingDelivery
        : pending
        ? getPendingDelivery
        : getOnTheWayDelivery;
      const res = await apiEndPoint(userId, pageNumber);
      setData(preProducts =>
        pageNumber > 1
          ? {
              ...res,
              data: preProducts?.data
                ? [...preProducts?.data, ...res?.data]
                : [...res?.data],
            }
          : res,
      );
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setDataLoading(false);
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const lastPage = Math.ceil((data?.meta?.total || 0) / data?.meta?.per_page);
    if (!pageLoading && pageNumber < lastPage) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };
  React.useEffect(() => {
    if (pageNumber > 0 && !pageLoading) {
      fetchData(setPageLoading);
    }
  }, [pageNumber, ChangeStatus]);

  const renderPendingDelivery = ({item, index}) => (
    <DeliveryPendingCard
      setDeliveredModal={setDeliveredModal}
      setOrderId={setOrderId}
      item={item}
      onPressDirection={() => navigate('Tracking')}
      markas={
        assign
          ? 'Mark As Pickup'
          : pending
          ? 'Mark As Pick Up'
          : 'Mark As Delivered'
      }
      onPress={() =>
        navigate(
          'OrderDetails',
          assign
            ? {
                status: '1',
                deliveryId: item?.id,
              }
            : picked
            ? {
                status: '2',
                deliveryId: item?.id,
              }
            : pending
            ? {
                status: '3',
                deliveryId: item?.id,
              }
            : {
                status: '1',
                deliveryId: item?.id,
              },
        )
      }
    />
  );

  const values = {
    order_id: order?.id,
    status: assign
      ? 'picked_up'
      : pending
      ? 'picked_up'
      : picked
      ? 'on_the_way'
      : 'delivered',
    delivery_boy_id: userId,
    payment_type:
      order?.payment_type === 'Cash On Delivery' ? 'cash_on_delivery' : '',
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
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader
        back
        title={
          assign
            ? t('assign')
            : picked
            ? t('picked')
            : pending
            ? t('pending_delivery')
            : t('on_the_way')
        }
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row
            style={{paddingHorizontal: mvs(20), justifyContent: 'flex-start'}}>
            <View style={styles.deliveryView}>
              <Delivery />
            </View>

            {assign ? (
              <Regular
                fontSize={mvs(12)}
                style={{marginLeft: mvs(10)}}
                label={`Assigned (${data?.data?.length || 0})`}
              />
            ) : picked ? (
              <Regular
                fontSize={mvs(12)}
                style={{marginLeft: mvs(10)}}
                label={`Picked (${data?.data?.length || 0})`}
              />
            ) : pending ? (
              <Regular
                fontSize={mvs(12)}
                style={{marginLeft: mvs(10)}}
                label={`Pending Delivery (${data?.data?.length || 0})`}
              />
            ) : (
              <Regular
                fontSize={mvs(12)}
                style={{marginLeft: mvs(10)}}
                label={`On The Way (${data?.data?.length || 0})`}
              />
            )}
          </Row>

          <CustomFlatList
            showsVerticalScrollIndicator={false}
            data={data?.data || []}
            renderItem={renderPendingDelivery}
            onEndReached={handleLoadMore} // Load more when reaching the end of the list
            onEndReachedThreshold={0.5} // Load more when the user reaches the last 50% of the list
            ListFooterComponent={pageLoading && <Loader />}
            contentContainerStyle={{
              paddingBottom: mvs(20),
              paddingHorizontal: mvs(20),
            }}
          />
        </>
      )}
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
export default PendingDelivery;
