import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

import TextInputComponent from './components/TextInputComponent/TextInputComponent';
import SliderComponent from './components/SliderComponent/SliderComponent';
import PickerComponent from './components/PickerComponent/PickerComponent';
import SwComponent from './components/SwitchComponent/SwComponent';
import FlexComponent from './components/FlexComponent/FlexComponent';
import FlexComponent2 from './components/FlexComponent2/FlexComponent2';
import TouchableComponent from './components/TouchableComponent/TouchableComponent';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ScrollViewComponent from './components/ScrollViewComponent/ScrollViewComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollViewComponent/>
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