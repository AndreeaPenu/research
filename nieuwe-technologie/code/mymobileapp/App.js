import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

import TextInputComponent from './components/TextInputComponent/TextInputComponent';
import SliderComponent from './components/SliderComponent/SliderComponent';
import PickerComponent from './components/PickerComponent/PickerComponent';
import SwComponent from './components/SwitchComponent/SwComponent';
import FlexComponent from './components/FlexComponent/FlexComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlexComponent></FlexComponent>
      </View>
    );
  }
}

AppRegistry.registerComponent('App',()=>App);

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});