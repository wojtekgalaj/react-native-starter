import React from 'react';
import glamorous from 'glamorous-native';
import { Text, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    return (
      <View>
        <Text>This it the login screen</Text>
        <Button title="Go to user screen" onPress={() => this.props.navigation.navigate('User')} />
      </View>
    );
  }
}
