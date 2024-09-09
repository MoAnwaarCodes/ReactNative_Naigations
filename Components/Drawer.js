import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './Menu';
import Security from './Security';
import Contact from './Contact';
const Drawar = createDrawerNavigator();

export default function Drawer() {
  return (
    <Drawar.Navigator>
      <Drawar.Screen name="Menu" component={Menu} />
      <Drawar.Screen name="Contact" component={Contact} />
    </Drawar.Navigator>
  );
}