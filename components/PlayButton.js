import React from 'react';
import {Pressable, Text} from 'react-native';

class PlayButton extends React.PureComponent {
  render() {
    return (
      <Pressable>
        <Text>I'm pressable!</Text>
      </Pressable>
    );
  }
}

export default PlayButton;
