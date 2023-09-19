import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { LatLng, MapPressEvent, MapViewProps, Marker, Region } from 'react-native-maps';
import { UTILS } from 'utils';
import { GeoPosition } from 'react-native-geolocation-service';
import { CurrentLocation } from 'assets/icons';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';

import { useAppDispatch } from 'hooks/use-store';
import { setLocation } from 'store/reducers/user-reducer';
import Regular from 'typography/regular-text';

interface CustomMapProps extends MapViewProps {
  children?: ReactNode;
  onPress: (e: any) => void;
}

const CustomMap: React.FC<CustomMapProps> = ({ children,
  initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  style = styles.map,
  onPress = (address: any) => { },
  ...mapProps }) => {
  const mapRef = React.useRef<MapView>(null);
  const dispatch = useAppDispatch();
  const [currentLocation, setCurrentLocation] = React.useState<LatLng | undefined>(undefined);
  const handleRegionChange = (region: LatLng) => {
    mapRef?.current?.animateToRegion({
      ...region, latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }, 1000);
  };

  const handleCurrentLocationPress = () => {
    // Logic to retrieve and set the current location
    // For example, using Geolocation API or a location service library
    try {
      UTILS.get_current_location((position: GeoPosition) => {
        setCurrentLocation({ ...position.coords });
        handleRegionChange(position.coords);
        UTILS._returnAddress(position.coords?.latitude, position.coords?.longitude).then((res) => {
          dispatch(setLocation({ ...res, ...position.coords }))
        });
      }, (error) => {
        console.log('error=>>', error);

      });
    } catch (error) {

    }
  };
  React.useEffect(() => {
    setTimeout(() => {
      handleCurrentLocationPress();
    }, 1000);
  }, [])
  const onPressMap = (e: MapPressEvent) => {
    setCurrentLocation(e.nativeEvent?.coordinate);
    UTILS._returnAddress(e.nativeEvent?.coordinate?.latitude, e.nativeEvent?.coordinate?.longitude).then((res) => {
      onPress({ ...res, coordinate: e.nativeEvent?.coordinate });
    });
  }
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        {...mapProps}
        onPress={onPressMap}
        style={style} initialRegion={initialRegion}  >
        {children}
        {currentLocation && <Marker coordinate={currentLocation} ></Marker>}

      </MapView>
      {/* <View style={[styles.currentLocationButton]}>
        <TouchableOpacity
          onPress={handleCurrentLocationPress}
        >
          <CurrentLocation height={'100%'} width={'100%'} />
        </TouchableOpacity>
    </View> */}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  currentLocationButton: {
    position: 'absolute',
    bottom: mvs(250),
    right: 16,
    backgroundColor: colors.white,
    height: mvs(50),
    width: mvs(50),
    borderRadius: mvs(25),
    padding: mvs(8),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

  },
});

export default CustomMap;
