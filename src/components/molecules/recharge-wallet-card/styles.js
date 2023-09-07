import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: mvs(90),
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: mvs(20),
    borderRadius: mvs(5),
    justifyContent: 'center',
    paddingHorizontal: mvs(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  backGroundImage: {
    width: mvs(70),
    height: mvs(38),
    // backgroundColor: 'red',
  },
  // innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
});
export default styles;
