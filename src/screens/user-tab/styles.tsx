import { StyleSheet } from 'react-native';
import { mvs, width } from 'config/metrices';
import { colors } from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  loginBtn: {
    backgroundColor: colors.white,
    width: mvs(100),
    height: mvs(38)
  },
  backgroudImage: {
    width: mvs(51),
    height: mvs(51),
  },
  boxContainer: {
    backgroundColor: colors.white,
    width: mvs(100),
    paddingVertical: mvs(16),
    paddingHorizontal: mvs(5),
    alignItems: 'center',
    borderRadius: mvs(10)
  },
  itemsContainer: {
    width: mvs(73),
    height: mvs(73),
    borderRadius: mvs(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerItems: {
    // width: mvs(60),
    // height: mvs(60),
    // backgroundColor: colors.blueHalf,
    // borderRadius: mvs(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer1: {
    width: '100%',
    backgroundColor: colors.white,
    height: mvs(150),
    marginTop: mvs(25),
    borderRadius: mvs(10),
    padding: mvs(15),
  },
  topContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(20),
    height: mvs(500),
  }

});
export default styles;
