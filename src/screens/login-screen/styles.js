import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.white,
  },
  lottie: {
    height: mvs(100),
    width: mvs(100),
    alignSelf: 'center',
    marginTop: mvs(20),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: mvs(0),
    paddingBottom: mvs(150),
  },
  backgroundContainer: {
    flex: 1,
    // backgroundColor: colors.white,
    paddingBottom: mvs(30),
  },
  inputContainer: {
    marginTop: mvs(-125),
    paddingBottom: mvs(30),
    // backgroundColor: colors.white,
    borderRadius: mvs(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginTexhzologyContainer: {
    marginTop: mvs(20),
    alignSelf: 'center',
    fontSize: mvs(15),
    marginBottom: mvs(20),
  },
  mainInnerContainer: {
    flex: 1,
    paddingHorizontal: mvs(20),
  },
});
export default styles;
