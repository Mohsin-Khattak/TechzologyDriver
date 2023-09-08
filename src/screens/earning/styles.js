import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemsContainer: {
    width: mvs(56),
    height: mvs(56),
    backgroundColor: colors.blueHalf,
    borderRadius: mvs(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredContainer: {
    width: '100%',
    height: mvs(169),
    backgroundColor: colors.primary,
    marginTop: mvs(15),
    paddingHorizontal: mvs(10),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  bottomContainer: {
    width: '100%',
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(20),
    backgroundColor: colors.blueHalf,
    marginBottom: mvs(20),
    marginTop: mvs(10),
    borderRadius: mvs(10),
  },
});
export default styles;
