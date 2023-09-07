import { Platform, StyleSheet } from 'react-native';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  imageBackGround: {
    width: mvs(82),
    height: mvs(82),
    // borderWidth: 1,

    // borderColor: colors.primary,
    alignSelf: 'center',
  },
  name: {
    marginTop: mvs(10),
    alignSelf: 'center',
  },
  email: {
    alignSelf: 'center',
    fontSize: mvs(12),
  },
  editBtn: {
    position: 'absolute',
    zIndex: 1,
    top: mvs(40),
    // left: mvs(70),
    right: mvs(-5),
  },
  innerContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    // height: 250,
    backgroundColor: colors.white,
    marginTop: mvs(20),
    borderRadius: mvs(10),
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(20),
  },
});
export default styles;
