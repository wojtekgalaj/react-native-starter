import React from 'react';
import glamorous from 'glamorous-native';

import { View } from 'react-native';

export class Wrapper extends React.Component {
  render() {
    return <Wrap {...this.props}>{this.props.children}</Wrap>;
  }
}

const Wrap = glamorous.view(
  {
    display: 'flex',
    height: '100%',
    padding: 10,
    margin: 'auto',
    backgroundColor: 'yellow',
  },
  props => ({
    paddingTop: props.modal ? 60 : 10,
  }),
);
