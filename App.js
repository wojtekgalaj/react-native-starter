import React from 'react';
import { Text, View, Button } from 'react-native';
import glamorous from 'glamorous-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from 'src/views/login';
import UserScreen from 'src/views/user';
import ModalScreen from 'src/components/modal';

const MainStack = createStackNavigator(
  {
    Login: LoginScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerTintColor: '#bada55',
    },
  },
);

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    Modal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
