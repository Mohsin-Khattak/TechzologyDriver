import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemsContainer: {
    width: mvs(73),
    height: mvs(73),
    backgroundColor: colors.skyBlue,
    borderRadius: mvs(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: mvs(18),
    height: mvs(18),
    borderRadius: mvs(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: mvs(5),
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.halfWhite,
    top: mvs(7),
  },
  innerContainer: {
    width: '100%',
    marginTop: mvs(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(15),
    borderRadius: mvs(10),
  },
  orderContainer: {
    backgroundColor: colors.white,
    width: '100%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: mvs(10),
    justifyContent: 'flex-start',
  },
  idContainer: {
    width: '3%',
    backgroundColor: colors.primary,
    borderTopLeftRadius: mvs(10),
    borderBottomLeftRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerLine: {
    height: mvs(2),
    backgroundColor: colors.halfWhite,
    marginVertical: mvs(5),
  },
  orderInnerContainer: {
    flex: 1,
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(10),
  },
  title: {fontSize: mvs(12)},
  addressTitle: {
    fontSize: mvs(12),
    marginLeft: mvs(5),
  },
  mapContainer: {
    height: mvs(200),
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: mvs(10),
    borderRadius: mvs(10),
    padding: mvs(5),
    // flex: 1,
  },
  paidContainer: {
    width: mvs(15),
    height: mvs(15),
    borderRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: mvs(60),
  },
});
export default styles;
