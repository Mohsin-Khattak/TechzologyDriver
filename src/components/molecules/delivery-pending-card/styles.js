import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    paddingVertical: mvs(6),
    marginTop: mvs(20),

    borderRadius: mvs(10),
    justifyContent: 'flex-start',
    borderLeftWidth: mvs(10),
    borderLeftColor: colors.primary,
  },
  idContainer: {
    width: '3%',
    backgroundColor: colors.primary,
    borderTopLeftRadius: mvs(10),
    borderBottomLeftRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    marginLeft: mvs(15),

    justifyContent: 'center',
  },
  priceContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
  viewDetailsBtn: {
    width: '45%',
    backgroundColor: colors.white,
    borderWidth: mvs(1),
    borderColor: colors.primary,
    height: mvs(40),
  },
  cross: {
    width: mvs(20),
    height: mvs(20),
    borderRadius: mvs(10),
    backgroundColor: colors.green,
    marginLeft: mvs(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
