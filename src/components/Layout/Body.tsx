import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {BodyProps} from '../../utils/type';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {Color} from '../../utils/Color';

const Body: FC<BodyProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[GlobalStyle.container, style]}>
      <StatusBar backgroundColor={Color.Sky} />
      {children}
    </SafeAreaView>
  );
};

export default Body;
