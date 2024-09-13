/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Card from './Components/UI_Practice/Card';
import BundleSet from './Components/UI_Practice/Bundle_Set';
import PushNotification from './Components/PushNotification/PushNotification';
import store from './Src/store';
import {Provider} from 'react-redux';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => AppWrapper);
