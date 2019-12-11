import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput } from 'react-native';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      textValue: ''
    }
  }

  onChangeText(value) {
    this.setState({
      textValue: value
    })
  }

  onSubmit() {
    alert('text changed');
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="Type Something Here"
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>What You Typed: {this.state.textValue}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('Input', () => Input);