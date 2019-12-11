import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class WelcomeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'User',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hello'
  }
  render() {
    let name = this.state.showName ? this.state.name : 'No Name';
    return (
      <View>
        <Text style={styles.myText}>{this.state.message}</Text>
        <Text style={styles.myText}>{name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  myText: {
    color: 'white'
  }
})

AppRegistry.registerComponent('WelcomeMessage', () => WelcomeMessage);