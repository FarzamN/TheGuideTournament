import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/font';

export default StyleSheet.create({
  containerStyle: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 5,
    alignSelf: 'center',

    height: 52,
  },
  loading: {
    fontSize: 16,
    marginLeft: 10,
    color: Color.White,
    fontFamily: Font.font500,
  },
  title: {
    fontSize: 17,
    fontFamily: Font.font600,
    textTransform: 'capitalize',
  },
});
