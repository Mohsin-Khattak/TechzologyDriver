import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
    // alignItems: 'center',
  },
  cross: {
    marginTop: mvs(20),
    alignSelf: 'flex-end',
    right: mvs(10),
  },

  imageStyle: {
    width: mvs(150),
    height: mvs(150),
    alignSelf: 'center',
    marginTop: mvs(50),
  },
  userImage: {width: '100%', height: '100%', borderRadius: mvs(100)},
  userName: {alignSelf: 'center', marginTop: mvs(10)},
  line: {
    height: mvs(1),
    backgroundColor: colors.lightGray,
    marginTop: mvs(20),
  },
  innerContainer: {marginTop: mvs(20), paddingHorizontal: mvs(20)},
  textStyle: {
    color: colors.primary,
    marginLeft: mvs(15),
    color: colors.darkBlack,
  },
});
export default styles;
