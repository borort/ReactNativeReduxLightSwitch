/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

export default class lightSwitch extends Component {

  constructor(props) {
    super(props);
  }





  render() {

    console.log(this.props.status);


    if(this.props.status == 'OFF') {
      lightbulb = require('../img/lightbulb-off.png');
    } else {
      lightbulb = require('../img/lightbulb-on.png');
    }

    return (
      <View style={styles.container}>

        <Image source={lightbulb}/>

        <TouchableHighlight style={styles.button} onPress={this.props.actions.switchOn}>
          <Text>ON</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={this.props.actions.switchOff}>
          <Text>OFF</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }



});
