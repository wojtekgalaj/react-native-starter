import React from 'react';
import glamorous from 'glamorous-native';
import { Text, View, Button } from 'react-native';
import { Wrapper } from 'src/components/wrapper';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    return (
      <Wrapper>
        <Text>This it the login screen</Text>
        <Button title="Go to user screen" onPress={() => this.props.navigation.navigate('User')} />
      </Wrapper>
    );
  }
}
