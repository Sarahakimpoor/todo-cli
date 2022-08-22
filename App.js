
import React from 'react';
import 'react-native-gesture-handler';
import {Text,View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigator from './navigation/AppNavigator';


const App = () => {

  return (
    <SafeAreaProvider>
      <AppNavigator/>
    </SafeAreaProvider>
    
  );
};



export default App;
