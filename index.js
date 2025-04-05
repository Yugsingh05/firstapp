import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { enableScreens } from 'react-native-screens';
enableScreens(); // improves performance and avoids crashes

AppRegistry.registerComponent(appName, () => App);
