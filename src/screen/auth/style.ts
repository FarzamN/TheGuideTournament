import {StyleSheet} from 'react-native';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Color';

export default StyleSheet.create({
  ImageBox: {
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
  newAccountButton: {
    backgroundColor: Color.Sky,
    borderWidth: 1,
    borderColor: Color.White,
  },
  newAccountButtonText: {
    fontSize: 16,
    fontFamily: Font.font500,
  },
  forget: {
    fontSize: 16,
    fontFamily: Font.font400,
    color: Color.White,
    marginTop: 10,
    marginHorizontal: 5,
  },
});
