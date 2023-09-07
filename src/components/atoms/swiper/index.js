import {silder} from 'assets/images';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
const SwiperCard = ({data = [0, 0, 0]}) => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        scrollEnabled={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        style={styles.wrapper}
        showsButtons={false}>
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={item ? {uri: item?.photo} : silder}
              style={styles.sliderImage}
            />
          </View>
        ))}
        {/* <View style={styles.slide}>
          <Image source={silder} style={styles.sliderImage} />
        </View>
        <View style={styles.slide}>
          <Image source={silder} style={styles.sliderImage} />
        </View> */}
      </Swiper>
    </View>
  );
};
export default SwiperCard;

const styles = StyleSheet.create({
  container: {
    height: mvs(180),
    // marginHorizontal: mvs(20),
    marginTop: mvs(0),
  },
  sliderImage: {
    width: width - mvs(40),
    height: mvs(180),
    borderRadius: mvs(18),
    resizeMode: 'cover',
  },
  // dotStyle: {marginBottom: -mvs(40)},
  // activeDotStyle: {marginBottom: -mvs(40), backgroundColor: colors.primary},
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
