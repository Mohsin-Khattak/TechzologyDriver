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

    marginTop: mvs(18),
  },
  backGroundImage: {
    width: mvs(90),
    height: mvs(78),
    marginTop: mvs(10),
  },
  imageMainContainer: {
    width: mvs(120),
    height: '100%',
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(10),
    borderRadius: mvs(5),
  },
  // innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  contentContainer: {
    paddingHorizontal: mvs(10),
    flex: 1,
    paddingVertical: mvs(5),
  },
});
export default styles;
