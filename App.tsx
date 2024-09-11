// // In App.js in a new project
// import './gesture-handler';
// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Drawer from './Components/Drawer';
// import Contact from './Components/Contact';
// import Bottom from './Components/Bottom';
// import MyTabs from './Components/MyTab';
// import MainScreen from './Components/UI_Practice/MainScreen';
// import {LinearGradient} from 'react-native-linear-gradient';
// const Stack = createNativeStackNavigator();

// function App() {
//   function GradientHeaderBackground() {
//     return (
//       <LinearGradient
//         colors={['#000000', '#333333']} // Dark black transitioning to lighter black
//         style={{flex: 1}}
//         start={{x: 0, y: 0}} // Gradient starts from top
//         end={{x: 1, y: 1}} // Gradient ends at bottom
//       />
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={MainScreen}
//           options={{
//             title: 'Store Details',
//             headerTitleAlign: 'center',
//             headerStyle: {
//               backgroundColor: 'transparent', // Set this to transparent as we are using a custom background
//             },
//             headerBackground: () => <GradientHeaderBackground />, // Add the gradient background here
//             headerTintColor: '#fff', // Change the text color to white
//             headerTitleStyle: {
//               fontWeight: 'bold', // Optional: Add bold styling to the title
//             },
//           }}
//         />
//         <Stack.Screen name="Bottom" component={Bottom}></Stack.Screen>
//         <Stack.Screen name="Top" component={MyTabs}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import {Linking, ActivityIndicator} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from './Components/Settings';
import MainScreen from './Components/UI_Practice/MainScreen';

const Stack = createNativeStackNavigator();
const NAVIGATION_IDS = ["home", "settings"];

function buildDeepLinkFromNotificationData(data: any): string | null {
  const navigationId = data?.navigationId;
  if (!NAVIGATION_IDS.includes(navigationId)) {
    console.warn('Unverified navigationId', navigationId);
    return null;
  }
  if (navigationId === "home") {
    return 'myapp://home';
  }
  if (navigationId === "settings") {
    return 'myapp://settings';
  }

  return null;
}

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: "home",
      Settings: "settings",
    },
  },
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    if (typeof url === 'string') {
      return url;
    }
    //getInitialNotification: When the application is opened from a quit state.
    const message = await messaging().getInitialNotification();
    const deeplinkURL = buildDeepLinkFromNotificationData(message?.data);
    if (typeof deeplinkURL === 'string') {
      return deeplinkURL;
    }
  },
  subscribe(listener: (url: string) => void) {
    const onReceiveURL = ({url}: {url: string}) => listener(url);

    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', onReceiveURL);
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const foreground = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);
    });
    //onNotificationOpenedApp: When the application is running, but in the background.
    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      const url = buildDeepLinkFromNotificationData(remoteMessage.data);
      console.log("url",url)
      if (typeof url === 'string') {
        listener(url);
      }
    });

    return () => {
      linkingSubscription.remove();
      unsubscribe();
      foreground();
    };
  },
};

function App(): React.JSX.Element {
  useEffect(() => {
    const requestUserPermission = async () => {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        const token = await messaging().getToken();
        console.log('FCM token:', token);
      }
    };

    requestUserPermission();
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator animating />}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
