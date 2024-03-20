import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {BodyProps} from '../../utils/type';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Color} from '../../utils/Color';

const Body: FC<BodyProps> = props => {
  const {children, style, whiteBar, blue} = props;
  return (
    <SafeAreaView
      style={[
        GlobalStyle.container,
        {backgroundColor: blue ? Color.DarkBlue : Color.Sky},
        style,
      ]}>
      <StatusBar
        backgroundColor={whiteBar ? Color.White : Color.Sky}
        barStyle={whiteBar ? 'dark-content' : 'light-content'}
      />
      {children}
    </SafeAreaView>
  );
};
export default Body;
