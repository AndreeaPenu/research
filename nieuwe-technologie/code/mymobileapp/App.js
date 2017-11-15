import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Navigator} from 'react-native';

import TextInputComponent from './components/TextInputComponent/TextInputComponent';
import SliderComponent from './components/SliderComponent/SliderComponent';
import PickerComponent from './components/PickerComponent/PickerComponent';
import SwComponent from './components/SwitchComponent/SwComponent';
import FlexComponent from './components/FlexComponent/FlexComponent';
import FlexComponent2 from './components/FlexComponent2/FlexComponent2';
import TouchableComponent from './components/TouchableComponent/TouchableComponent';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import ScrollViewComponent from './components/ScrollViewComponent/ScrollViewComponent';
import StatusBarComponent from './components/StatusBarComponent/StatusBarComponent';
import ToolbarAndroidComponent from './components/ToolbarAndroidComponent/ToolbarAndroidComponent';
import IconsComponent from './components/IconsComponent/IconsComponent';
import ListViewComponent from './components/ListViewComponent/ListViewComponent';
import FetchComponent from './components/FetchComponent/FetchComponent';

import SceneComponent1 from './components/SceneComponents/SceneComponent1';
import SceneComponent2 from './components/SceneComponents/SceneComponent2';

import AsyncStorageComponent from './components/AsyncStorageComponent/AsyncStorageComponent';
import CameraRollComponent from './components/CameraRollComponent/CameraRollComponent';
import GeolocationComponent from './components/GeolocationComponent/GeolocationComponent';
import ClipboardComponent from './components/ClipboardComponent/ClipboardComponent';
import ShareComponent from './components/ShareComponent/ShareComponent';

export default class App extends React.Component {
/*  renderScene(route, navigator){
    switch(route.id){
        case 'scene1':
          return(<SceneComponent1 navigator={navigator} title="scene1"/>)
        case 'scene2':
          return(<SceneComponent2 navigator={navigator} title="scene2"/>)
    }
  }*/
  render() {
    return (
        /*{      <Navigator
        initialRoute={{id: 'scene1'}}
        renderScene={this.renderScene}
        configureScene={(route, routeStack)=>Navigator.SceneConfigs.FloatFromBottom}
      />}*/

        <View style={styles.container}>
      <ShareComponent/>
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