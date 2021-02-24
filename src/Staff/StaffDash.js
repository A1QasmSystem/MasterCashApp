import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class StaffDash extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: 'red', flex: 1}}>
          <Text> textInComponent </Text>
        </View>
        <View style={{backgroundColor: 'yellow', flex: 1}}>
          <Text> textInComponent </Text>
        </View>
        <View style={{backgroundColor: 'green', flex: 1}}>
          <Text> textInComponent </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
