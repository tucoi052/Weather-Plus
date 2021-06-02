import AsyncStorage from '@react-native-community/async-storage';
import { DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
// import { clearToken, setToken } from 'api/client';
// import firebase from 'firebase';
import React, { useEffect, useRef } from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import SwitchScreen from 'screens/SwitchScreen';
import store from 'store/configureStore';
// import SplashScreen from 'react-native-splash-screen'
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
  },
};
enableScreens();
const AppLayout = () => {

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme} >
        <SwitchScreen />
      </NavigationContainer>
    </Provider>
  );
}
let App = (AppLayout);
export default App;