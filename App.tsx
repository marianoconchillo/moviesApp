import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';
// import { FadeScreen } from './src/screens/FadeScreen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App;
