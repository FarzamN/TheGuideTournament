import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AuthNav, UserNav} from './src/navigation';

const App = () => {
  const isSignin = false;
  setTimeout(() => {
    SplashScreen.hide();
  }, 300);

  return <>{isSignin ? <UserNav /> : <AuthNav />}</>;
};

export default App;
