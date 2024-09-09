import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Screen 1" component={Screen1} />
      <Tab.Screen name="Screen 2" component={Screen2} />
    </Tab.Navigator>
  );
}
