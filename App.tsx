// In App.js in a new project
import './gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Drawer from './Components/Drawer';
import Contact from './Components/Contact';
import Bottom from './Components/Bottom';
import MyTabs from './Components/MyTab';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Drawer} />
        <Stack.Screen name="Bottom" component={Bottom}></Stack.Screen>
        <Stack.Screen name="Top" component={MyTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
