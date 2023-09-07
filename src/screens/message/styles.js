import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: mvs(0),
    paddingBottom: mvs(150),
  },
  backgroundContainer: {
    width: '100%',
    height: mvs(250),
    // backgroundColor: colors.primary,
  },
});
export default styles;
