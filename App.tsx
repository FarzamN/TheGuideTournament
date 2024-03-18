import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Color} from './src/utils/Color';
import {Font} from './src/utils/font';

const App = () => {
  setTimeout(() => {
    SplashScreen.hide();
  }, 300);

  return (
    <View>
      <Text
        style={{
          color: Color.White,
          fontSize: 100,
          fontFamily: Font.font800,
        }}>
        App
      </Text>
    </View>
  );
};

export default App;
