import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  imageBackGround: {
    width: mvs(70),
    height: mvs(70),
  },
  profileContainer: {
    padding: mvs(10),
    borderWidth: mvs(1),
    borderColor: colors.primary,
    marginTop: mvs(20),
    borderRadius: mvs(10),
  },
  chatBtn: {
    height: mvs(35),
    paddingVertical: mvs(5),
    marginRight: mvs(5),
  },
  messageBtn: {
    height: mvs(35),
    paddingVertical: mvs(5),
  },
  trackContainer: {
    borderRadius: mvs(10),
    borderWidth: mvs(1),
    borderColor: colors.primary,
    marginTop: mvs(20),
    paddingBottom: mvs(10),
  },
  trackingTextContainer: {
    backgroundColor: colors.primary,
    borderTopRightRadius: mvs(10),
    borderTopLeftRadius: mvs(10),
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(10),
  },
  line: {
    height: mvs(1),
    backgroundColor: colors.white,
    width: mvs(62),
  },
  distanceContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingVertical: mvs(10),
    borderRadius: mvs(10),
  },
  circleOne: {
    width: mvs(15),
    height: mvs(15),
    borderRadius: mvs(10),
    borderWidth: mvs(2),
    borderColor: colors.primary,
    backgroundColor: colors.white,
    // position: 'absolute',
    // bottom: mvs(99),
    // left: mvs(-6),
  },
  lineVertical: {
    height: mvs(130),
    backgroundColor: colors.primary,
    width: mvs(2),
    left: mvs(6),
    position: 'absolute',
  },
});
export default styles;
