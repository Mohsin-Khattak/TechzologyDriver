import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  columnWrapperStyle: {
    paddingHorizontal: 20,
  },
  balanceContainer: {
    width: '60%',
    height: mvs(110),
    borderRadius: mvs(10),
    backgroundColor: colors.primary,
    alignItems: 'center',
    
    paddingHorizontal:mvs(20)
  },
  rechargeContainer: {
    width: '35%',
    height: mvs(110),
    borderRadius: mvs(10),
    backgroundColor: colors.blueHalf,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
