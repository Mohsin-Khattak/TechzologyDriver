import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    // height: mvs(250),
    paddingVertical: mvs(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginTop: mvs(20),
    borderRadius: mvs(10),
  },
  innerContainer: {paddingVertical: mvs(10), paddingHorizontal: mvs(10)},
  addressContent: {
    justifyContent: 'flex-start',
    backgroundColor: 'red',
    flex: 1,
  },

  yourAddress: {
    marginLeft: mvs(30),

    marginLeft: mvs(50),
    fontSize: mvs(12),
    flex: 1,
  },
  yourCity: {
    marginLeft: mvs(30),

    marginLeft: mvs(55),
    fontSize: mvs(12),
    flex: 1,
  },
  yourCountry: {
    marginLeft: mvs(30),

    marginLeft: mvs(58),
    fontSize: mvs(12),
    flex: 1,
  },
  phone: {
    marginLeft: mvs(30),

    marginLeft: mvs(60),
    fontSize: mvs(12),
    flex: 1,
  },
  passCode: {
    marginLeft: mvs(60),
    flex: 1,
    fontSize: mvs(12),
  },

  circle: {
    width: mvs(18),
    height: mvs(18),
    borderRadius: mvs(9),
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    right: mvs(5),
    position: 'absolute',
  },
});
export default styles;
