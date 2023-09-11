import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {IconButton} from 'components/atoms/buttons';
import CustomMap from 'components/atoms/custom-map';
import MapDirections from 'components/atoms/custom-map-direction';
import Stars from 'components/atoms/stars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Medium from 'typography/medium-text';
import Bold from 'typography/bold-text';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';

const Tracking = props => {
  const origin = {latitude: 31.560249, longitude: 74.362284};
  const destination = {latitude: 31.556014, longitude: 74.354795};
  return (
    <View style={styles.container}>
      <AppHeader back title={t('tracking')} />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: mvs(20), flexGrow: 1}}>
        <View style={styles.mapContainer}>
          <CustomMap>
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
                style={styles.imageBackGround}></ImageBackground>
              <View style={{marginLeft: mvs(10)}}>
                <Regular
                  color={colors.darkBlack}
                  fontSize={mvs(12)}
                  label={'Paul K. Jensen'}
                />
                <Regular
                  color={colors.darkBlack}
                  fontSize={mvs(10)}
                  label={'In transit'}
                />
                <Stars size={10} />
              </View>
            </Row>
            <Row>
              <IconButton
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
              <IconButton
                Icon={
                  <MaterialIcons
                    name={'message'}
                    size={13}
                    color={colors.white}
                    style={{marginRight: mvs(5)}}
                  />
                }
                textStyle={{fontSize: mvs(14)}}
                containerStyle={styles.messageBtn}
                title={t('chat')}
              />
            </Row>
          </Row>
          <Row>
            <View style={{flex: 1}}>
              <Regular
                label={t('id_number')}
                fontSize={mvs(12)}
                color={colors.darkBlack}
              />
              <Regular
                label={'1578-A4'}
                fontSize={mvs(12)}
                color={colors.darkBlack}
              />
            </View>
            <View style={{flex: 1}}>
              <Regular
                label={t('insurance')}
                fontSize={mvs(12)}
                color={colors.darkBlack}
              />
              <Regular
                label={'VR1876B'}
                fontSize={mvs(12)}
                color={colors.darkBlack}
              />
            </View>
            <View style={{flex: 1}}>
              <Regular
                label={t('Vehicle')}
                fontSize={mvs(12)}
                color={colors.darkBlack}
              />
              <Regular
                label={'Volvo FMX'}
                fontSize={mvs(12)}
                color={colors.darkBlack}
              />
            </View>
            <View style={{flex: 1}}>
              <Regular
                label={t('driver_rate')}
                fontSize={mvs(12)}
                color={colors.darkBlack}
              />
              <Regular
                label={'5'}
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
              <Bold color={colors.white} fontSize={mvs(18)} label={'10.5 km'} />
            </View>
          </View>
          <View style={{paddingHorizontal: mvs(20)}}>
            <Regular label={t('time_line')} />
            <Row>
              <View>
                <View style={{height: mvs(120)}}>
                  <View style={styles.lineVertical} />
                  <View
                    style={{
                      justifyContent: 'space-between',
                      height: mvs(120),
                    }}>
                    <Row
                      style={{
                        alignItems: 'flex-start',
                      }}>
                      <View style={styles.circleOne} />
                      <Row style={{marginLeft: mvs(15)}}>
                        <View style={{width: mvs(80)}}>
                          <Regular
                            style={{fontSize: mvs(12)}}
                            label={'pending'}
                          />
                        </View>
                        <View style={{flex: 1}}>
                          <Regular label={'Start Driving'} />
                          <Regular label={'Locatioin'} />
                        </View>
                      </Row>
                    </Row>
                    <Row
                      style={{
                        alignItems: 'flex-start',
                      }}>
                      <View style={styles.circleOne} />
                      <Row style={{marginLeft: mvs(15), flex: 1}}>
                        <View style={{width: mvs(80)}}>
                          <Regular
                            style={{fontSize: mvs(12)}}
                            label={'on the way'}
                          />
                        </View>
                        <View style={{flex: 1}}>
                          <Regular label={'driving'} />
                          <Regular fontSize={mvs(12)} label={'Location'} />
                          <Row style={{paddingRight: mvs(15)}}>
                            <Regular fontSize={mvs(12)} label={'7 km/h'} />
                            <Regular fontSize={mvs(12)} label={'50 min'} />
                            <Regular fontSize={mvs(12)} label={'10 .5 km'} />
                          </Row>
                        </View>
                      </Row>
                    </Row>
                    <Row style={{alignItems: 'flex-end', marginTop: mvs(20)}}>
                      <View style={styles.circleOne} />
                      <Row
                        style={{
                          alignItems: 'flex-end',
                          marginLeft: mvs(15),
                        }}>
                        <View style={{width: mvs(80)}}>
                          <Regular
                            style={{fontSize: mvs(12)}}
                            label={'Location'}
                          />
                        </View>
                        <View style={{flex: 1}}>
                          <Regular label={'Stopped'} />
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
    </View>
  );
};
export default Tracking;
