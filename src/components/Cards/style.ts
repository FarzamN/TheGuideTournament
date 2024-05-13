import {StyleSheet} from 'react-native';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Color';

export default StyleSheet.create({
  HomeSwitch: {
    paddingVertical: 7,
    borderRadius: 10,
    marginBottom: 10,
  },
  // !!! card here
  HomeContainer: {
    height: 180,
    marginBottom: 15,
    borderRadius: 6,
    overflow: 'hidden',
    marginHorizontal: 10,
    // borderTopLeftRadius: 0,
    // borderTopRightRadius: 0,
  },
  HomeCardTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: Font.font600,
  },
  WhiteBanner: {
    backgroundColor: 'white',
    // height: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  BannerText: {
    color: Color.LightBlue,
    fontSize: 21,
    fontFamily: Font.font700,
    textTransform: 'uppercase'
  },
  ShareIconBox: {
    backgroundColor: Color.LightPink,
    borderRadius: 100,
    padding: 6,
    aspectRatio: 1 / 1,
  },
});
