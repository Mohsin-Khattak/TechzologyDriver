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
  selectButton: {
    height: mvs(40),
    borderWidth: mvs(1),
    borderColor: colors.primary,
    borderRadius: mvs(5),
    justifyContent: 'center',
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    width: '45%',
  },
  dotContainer: {
    width: '82%',
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    top: mvs(40),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: mvs(10),
    borderBottomLeftRadius: mvs(10),
    borderBottomRightRadius: mvs(10),
    flex: 1,
  },
  deliverdContainer: {
    width: '80%',
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
    top: mvs(40),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: mvs(10),
    borderBottomLeftRadius: mvs(10),
    borderBottomRightRadius: mvs(10),
    flex: 1,
    left: mvs(29),
  },
});
export default styles;
