import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthArr} from '../utils/Data';

const AuthNav: FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={AuthArr[0].n}
        screenOptions={{headerShown: false, animation: 'ios'}}>
        {AuthArr.map(({n, c}) => (
          <Screen name={n} component={c} key={n} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthNav;
