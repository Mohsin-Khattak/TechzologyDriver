import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // padding: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    width: mvs(150),
    marginLeft: mvs(10),
    borderRadius: mvs(10),
    marginTop: mvs(10),
  },
  backGroundImage: {
    width: mvs(134),
    height: mvs(110),
    marginTop: mvs(10),
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
});
export default styles;
