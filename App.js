import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import WelcomeMessage from './app/components/WelcomeMessage';
import Sections from './app/components/Sections';
import Input from './app/components/Input';

export default class nativedemo extends Component {
  render() {
    return (
      <View>
        <WelcomeMessage />
        <Sections />
        <Input />
      </View>
    )
  }
}

AppRegistry.registerComponent('Native_Demo', () => nativedemo);