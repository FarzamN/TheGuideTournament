/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import store from './src/redux/reducer/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Root = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <App />
    </Provider>
  </GestureHandlerRootView>

);

AppRegistry.registerComponent(appName, () => Root);
