import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class nativedemo extends Component {
  render() {
    return (
      <View>
        <View style={styles.topView}>
          <Text style={styles.text}>My React-Native App!</Text>
          <View style={styles.container}>
            <TouchableHighlight
              style={styles.view1}
              onPress={this.onPress}
              underlayColor="pink"
            >
              <View>
                <Text style={styles.viewText2}>Here are some touchable sections</Text>
              </View>
            </TouchableHighlight>
            <TouchableOpacity
              style={styles.view2}
              onPress={this.onPress2}
            >
              <View>
                <Text style={styles.viewText3}>each section does something different</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.bottomView}>
              <Text style={styles.viewText}>Here is the bottom view</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'blue'
  },
  text: {
    color: 'white',
    marginTop: 50,
    fontSize: 25,
    paddingLeft: 60
  },
  container: {
    flexDirection: 'column',
    height: 150,
    marginTop: 50
  },
  view1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  view2: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 10
  },
  view3: {
    flex: 1,
    backgroundColor: 'green'
  },
  bottomView: {
    height: 30,
    backgroundColor: 'black'
  },
  viewText: {
    color: 'white',
    paddingLeft: 100
  },
  viewText2: {
    paddingLeft: 60,
    color: 'black'
  },
  viewText3: {
    paddingLeft: 50,
    color: 'black'
  }
})

AppRegistry.registerComponent('Native_Demo', () => nativedemo);