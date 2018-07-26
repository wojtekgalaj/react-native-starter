import React from 'react';
import glamorous from 'glamorous-native';

import { Text, Button } from 'react-native';
import { Wrapper } from 'src/components/wrapper';

export default class ModalScreen extends React.Component {
  render() {
    return (
      <Wrapper modal>
        <Text>This is the Modal Content</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
      </Wrapper>
    );
  }
}
