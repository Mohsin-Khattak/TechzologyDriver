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
  },
  yourCity: {
    marginLeft: mvs(30),

    marginLeft: mvs(80),
    fontSize: mvs(12),
  },
  yourCountry: {
    marginLeft: mvs(30),

    marginLeft: mvs(58),
    fontSize: mvs(12),
  },
  phone: {
    marginLeft: mvs(30),

    marginLeft: mvs(60),
    fontSize: mvs(12),
  },
  passCode: {marginLeft: mvs(30), fontSize: mvs(12)},
  dotContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: mvs(28),
    top: mvs(35),
    borderRadius: mvs(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: mvs(10),
  },
});
export default styles;
