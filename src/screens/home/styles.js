import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  compeleteContainer: {
    backgroundColor: colors.primary,
    padding: mvs(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mvs(10),
    width: '48%',
  },
  pendingContainer: {
    backgroundColor: colors.green,
    padding: mvs(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mvs(10),
    width: '48%',
  },
  boxContainer: {paddingHorizontal: mvs(20), marginTop: mvs(20)},
  text: {marginTop: mvs(5), color: colors.white, fontSize: mvs(14)},
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    marginTop: mvs(20),
    borderTopRightRadius: mvs(15),
    borderTopLeftRadius: mvs(15),
    paddingHorizontal: mvs(20),
  },
  cancelledContainer: {
    paddingHorizontal: mvs(20),
    backgroundColor: colors.skyBlue,
    paddingVertical: mvs(10),
    marginTop: mvs(25),
    borderRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circle: {
    width: mvs(90),
    height: mvs(90),
    backgroundColor: colors.skyBlue,
    borderRadius: mvs(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
