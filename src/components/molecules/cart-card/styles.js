import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: mvs(20),
    marginTop: mvs(18),
  },
  backGroundImage: {
    width: mvs(90),
    height: mvs(90),
    marginTop: mvs(10),
  },
  imageMainContainer: {
    width: mvs(100),
    height: '100%',
    backgroundColor: colors.primary,
    paddingLeft: mvs(10),
    borderRadius: mvs(5),
    // paddingVertical: mvs(10),
  },
  // innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  contentContainer: {
    flex: 1,
    paddingVertical: mvs(10),
    marginLeft: mvs(14),
  },
  buynowBtn: {
    width: '48%',
    backgroundColor: colors.white,
    borderWidth: mvs(1),
    borderColor: colors.primary,
  },
  subQuantity: {
    width: mvs(26),
    height: mvs(26),
    backgroundColor: colors.blueHalf,
    borderWidth: mvs(1),
    borderColor: colors.primary,
    borderRadius: mvs(0),
  },
  countextContainer: {width: mvs(60), alignItems: 'center'},
  subAddText: {color: colors.primary, fontSize: mvs(16)},
});
export default styles;
