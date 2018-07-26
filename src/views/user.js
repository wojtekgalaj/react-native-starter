import React from 'react';
import { View, Text, Button } from 'react-native';

export default class UserScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the user screen</Text>
        <Button title="Open Modal" onPress={() => this.props.navigation.navigate('Modal')} />
      </View>
    );
  }
}
