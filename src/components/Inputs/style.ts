import {StyleSheet} from 'react-native';
import {width} from '../../utils/Constants';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/font';

export default StyleSheet.create({
  InputStyles: {
    width: '100%',
    backgroundColor: Color.Non,
    alignSelf: 'center',
    color: Color.Black,
    fontFamily: Font.font500,
    fontSize: 16,
    borderRadius: 15,
  },
  MainInputBox: {
    backgroundColor: Color.White,
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
