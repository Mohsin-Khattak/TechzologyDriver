import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '47%',
    // height: mvs(250),
    // padding: mvs(5),
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: mvs(20),
    borderRadius: mvs(10),
  },
  backGroundImage: {
    width: mvs(134),
    height: mvs(110),
    // backgroundColor: 'red',
    marginTop: mvs(10),
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  btnAddtoCart: {
    borderRadius: mvs(0),
    height: mvs(35),
    marginTop: mvs(10),
  },
});
export default styles;
