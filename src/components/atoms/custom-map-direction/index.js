import {colors} from 'config/colors';
import React, {useEffect} from 'react';

import MapViewDirections from 'react-native-maps-directions';
const MapDirections = props => {
  const {
    origin,
    destination,
    strokeWidth,
    strokeColor,
    handleGetDirections,
    waypoints = [],
  } = props;
  // const origin = {latitude: 37.78825, longitude: -122.4324};
  // const destination = {latitude: 37.7749, longitude: -122.4194};

  return (
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={'AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98'}
      strokeWidth={5} // strokeWidth={3}
      strokeColor={colors.primary} // strokeColor="hotpink"
      onReady={handleGetDirections}
      waypoints={waypoints}
    />
  );
};

export default MapDirections;
