import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: mvs(70),
    marginTop: mvs(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: mvs(10),
    justifyContent: 'flex-start',
  },
  idContainer: {
    width: '10%',
    backgroundColor: colors.primary,
    borderTopLeftRadius: mvs(10),
    borderBottomLeftRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    marginLeft: mvs(15),
    width: '65%',
    justifyContent: 'center',
  },
  priceContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
export default styles;
