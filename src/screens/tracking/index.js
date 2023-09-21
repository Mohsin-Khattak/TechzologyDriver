import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {ImageBackground, ScrollView, View, Image} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {IconButton} from 'components/atoms/buttons';
import CustomMap from 'components/atoms/custom-map';
import MapDirections from 'components/atoms/custom-map-direction';
import {Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getDirection, getDistance} from 'services/api/auth-api-actions';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {Marker} from 'react-native-maps';
import {Loader} from 'components/atoms/loader';
import {useAppSelector} from 'hooks/use-store';
import {UTILS} from 'utils';

const Tracking = props => {
  const {orderId, pending} = props?.route?.params || {};

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();
  const userInfo = useAppSelector(s => s?.user);
  const [totalDistance, setTotalDistance] = React.useState('');

  const latitude = userInfo?.location?.geoCode?.lat;
  const longitude = userInfo?.location?.geoCode?.lng;

  const origin = {
    latitude: data?.warehouse?.latitude * 1 || 37.78825,
    longitude: data?.warehouse?.longitude * 1 || -122.4324,
  };
  const destination = {
    latitude: data?.customerLatLng?.latitude * 1 || 37.78825,
    longitude: data?.customerLatLng?.longitude * 1 || -122.4324,
  };

  const fetchDirection = async setLoading => {
    try {
      setLoading(true);
      const res = await getDirection(orderId, latitude, longitude);
      setData(res);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('get Directioin Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    if (data) getTimeDistance();
  }, [data]);
  const getTimeDistance = async () => {
    try {
      const res = await getDistance(
        origin?.latitude,
        destination?.latitude,
        origin?.longitude,
        destination?.longitude,
      );
      setTotalDistance(res);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('get Directioin Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchDirection(setLoading);
    const intervalId = setInterval(() => {
      fetchDirection(() => {});
    }, 25000); // 25 seconds in milliseconds
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader back title={t('tracking')} />
      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          contentContainerStyle={{paddingHorizontal: mvs(20), flexGrow: 1}}>
          <View style={styles.mapContainer}>
            <CustomMap latLng={origin}>
              <Marker coordinate={origin} />
              <Marker coordinate={destination}>
                <ImageBackground
                  source={{
                    uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
                  }}
                  borderRadius={mvs(100)}
                  style={{width: mvs(25), height: mvs(25)}}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: mvs(100),
                    }}
                    source={{uri: data?.customerDetails?.avatar_original}}
                  />
                </ImageBackground>
              </Marker>
              <MapDirections origin={origin} destination={destination} />
            </CustomMap>
          </View>
          <View style={styles.profileContainer}>
            <Row style={{alignItems: 'center'}}>
              <Row>
                <ImageBackground
                  source={{
                    uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
                  }}
                  borderRadius={mvs(100)}
                  style={styles.imageBackGround}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: mvs(100),
                    }}
                    source={{uri: data?.customerDetails?.avatar_original}}
                  />
                </ImageBackground>
                <View style={{marginLeft: mvs(10)}}>
                  <Regular
                    color={colors.darkBlack}
                    fontSize={mvs(12)}
                    style={{marginTop: mvs(10)}}
                    label={data?.customerAddress?.name}
                  />
                  <Regular
                    color={colors.darkBlack}
                    fontSize={mvs(10)}
                    label={data?.customerAddress?.phone}
                  />
                </View>
              </Row>
              <Row>
                <IconButton
                  onPress={() =>
                    UTILS.dialPhone(data?.customerAddress?.phone || '')
                  }
                  Icon={
                    <Ionicons
                      name={'call-outline'}
                      size={13}
                      color={colors.white}
                      style={{marginRight: mvs(5)}}
                    />
                  }
                  textStyle={{fontSize: mvs(14)}}
                  containerStyle={styles.chatBtn}
                  title={t('call')}
                />
              </Row>
            </Row>
            <Row>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Regular
                  label={t('email')}
                  fontSize={mvs(12)}
                  color={colors.darkBlack}
                />
                <Regular
                  label={data?.customerAddress?.email}
                  fontSize={mvs(12)}
                  color={colors.darkBlack}
                />
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Regular
                  label={t('address')}
                  fontSize={mvs(12)}
                  color={colors.darkBlack}
                />
                <Regular
                  label={data?.customerAddress?.address}
                  fontSize={mvs(12)}
                  color={colors.darkBlack}
                />
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Regular
                  label={t('city')}
                  fontSize={mvs(12)}
                  color={colors.darkBlack}
                />
                <Regular
                  label={data?.customerAddress?.city}
                  fontSize={mvs(12)}
                  color={colors.darkBlack}
                />
              </View>
            </Row>
          </View>
          <View style={styles.trackContainer}>
            <View style={styles.trackingTextContainer}>
              <Regular color={colors.white} label={t('tracking')} />
              <View style={styles.line} />
            </View>
            <View style={{padding: mvs(20)}}>
              <View style={styles.distanceContainer}>
                <Medium color={colors.white} label={t('distance')} />
                <Bold
                  color={colors.white}
                  fontSize={mvs(18)}
                  label={`${totalDistance?.km} km`}
                />
              </View>
            </View>
            <View style={{paddingHorizontal: mvs(20), flex: 1}}>
              <Regular label={t('time_line')} />
              <Row>
                <View style={{flex: 1}}>
                  <View>
                    <View style={styles.lineVertical} />
                    <View
                      style={{
                        justifyContent: 'space-between',
                        // height: mvs(120),
                        gap: mvs(20),
                      }}>
                      <Row
                        style={{
                          alignItems: 'flex-start',
                        }}>
                        <View style={styles.circleOne} />
                        <Row style={{marginLeft: mvs(15), gap: mvs(10)}}>
                          <Regular
                            style={{fontSize: mvs(12)}}
                            label={t('delivery_boy')}
                          />

                          <View style={{flex: 1}}>
                            {pending ? (
                              <>
                                <Regular label={t('teczology_ecommerce')} />
                                <Regular label={t('warehouse')} />
                              </>
                            ) : (
                              <Regular
                                numberOfLines={2}
                                fontSize={12}
                                label={userInfo?.location?.fulladdress}
                              />
                            )}
                          </View>
                        </Row>
                      </Row>
                      <Row
                        style={{
                          alignItems: 'flex-start',
                        }}>
                        <View style={styles.circleOne} />
                        <Row style={{marginLeft: mvs(15), flex: 1}}>
                          <View style={{width: mvs(80)}}></View>
                          <View style={{flex: 1}}>
                            <Regular fontSize={mvs(12)} label={t('distance')} />
                            <Row style={{paddingRight: mvs(15)}}>
                              <Regular
                                fontSize={mvs(12)}
                                label={`${totalDistance?.km} km`}
                              />
                              <Regular
                                fontSize={mvs(12)}
                                label={totalDistance?.time}
                              />
                            </Row>
                          </View>
                        </Row>
                      </Row>
                      <Row
                        style={{
                          alignItems: 'flex-end',
                          marginBottom: mvs(-10),
                        }}>
                        <View style={styles.circleOne} />
                        <Row
                          style={{
                            alignItems: 'flex-end',
                            marginLeft: mvs(15),
                            flex: 1,
                          }}>
                          <View style={{width: mvs(80)}}>
                            <Regular
                              style={{fontSize: mvs(12)}}
                              label={t('customer_address')}
                            />
                          </View>
                          <View style={{flex: 1}}>
                            <Regular
                              fontSize={mvs(12)}
                              label={data?.customerAddress?.address}
                            />
                          </View>
                        </Row>
                      </Row>
                    </View>
                  </View>
                </View>
              </Row>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default Tracking;
