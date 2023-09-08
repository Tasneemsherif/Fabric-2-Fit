import { createSwitchNavigator } from 'react-navigation';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
  },
  {
    initialRouteName: 'Auth', // Set this to 'App' if you want to start with the app's main content.
  }
);

export default SwitchNavigator;