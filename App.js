import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import glamorous from 'glamorous-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from 'src/views/login';
import UserScreen from 'src/views/user';

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

class ModalScreen extends React.Component {
  render() {
    return (
      <ModalWrapper>
        <Text>This is the Modal Content</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
      </ModalWrapper>
    );
  }
}

const ModalWrapper = glamorous.view({
  width: 100,
  height: 100,
  display: 'flex',
});

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Title = glamorous.text({
  fontSize: 14,
  margin: 20,
  color: 'red',
});
