import React from 'react';
import LottieView from 'lottie-react-native';

export default function LottieAnimation({src, style}) {
  return <LottieView source={src} style={style} autoPlay loop />;
}
