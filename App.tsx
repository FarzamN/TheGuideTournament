import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AuthNav, UserNav} from './src/navigation';
import {useSelector} from 'react-redux';
import {RootState} from './src/redux/reducer/store';

const App = () => {
  const userDetail = useSelector((state: RootState) => state.userDetails);
  console.log(userDetail);
  setTimeout(() => {
    SplashScreen.hide();
  }, 300);

  return <>{
    // userDetail ? 
    <UserNav />
    // : 
    // <AuthNav />
    }</>;
};

export default App;
