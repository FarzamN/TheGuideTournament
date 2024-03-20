import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/font';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: Color.White,
    paddingHorizontal: 15,
  },
  ImageBox: {
    width: 70,
    height: 60,
  },
  logout: {
    fontSize: 17,
    color: '#8FBFFE',
    fontFamily: Font.font700,
  },
  title: {
    fontSize: 17,
    color: Color.grey,
    fontFamily: Font.font700,
  },
  logoutButton: {
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 3.5,
    borderRadius: 5,
  },
});
