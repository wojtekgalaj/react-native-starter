import React from 'react';
import { View, Text, Button } from 'react-native';
import { Wrapper } from 'src/components/wrapper';

export default class UserScreen extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>This is the user screen</Text>
        <Button title="Open Modal" onPress={() => this.props.navigation.navigate('Modal')} />
      </Wrapper>
    );
  }
}
