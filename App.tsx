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
import MainScreen from './Components/UI_Practice/MainScreen';
import {LinearGradient} from 'react-native-linear-gradient';
const Stack = createNativeStackNavigator();

function App() {
  function GradientHeaderBackground() {
    return (
      <LinearGradient
        colors={['#000000', '#333333']} // Dark black transitioning to lighter black
        style={{flex: 1}}
        start={{x: 0, y: 0}} // Gradient starts from top
        end={{x: 1, y: 1}} // Gradient ends at bottom
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            title: 'Store Details',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'transparent', // Set this to transparent as we are using a custom background
            },
            headerBackground: () => <GradientHeaderBackground />, // Add the gradient background here
            headerTintColor: '#fff', // Change the text color to white
            headerTitleStyle: {
              fontWeight: 'bold', // Optional: Add bold styling to the title
            },
          }}
        />
        <Stack.Screen name="Bottom" component={Bottom}></Stack.Screen>
        <Stack.Screen name="Top" component={MyTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
