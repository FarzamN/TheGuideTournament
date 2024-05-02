import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserArr} from '../utils/Data';

const UserNav: FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={UserArr[0].n}
        screenOptions={{headerShown: false, animation: 'ios'}}>
        {UserArr.map(({n, c}) => (
          <Screen 
          name={n} 
          component={c}
           key={n}
           options={{ animation: 'slide_from_right' }}
            />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default UserNav;
