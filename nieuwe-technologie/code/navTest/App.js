import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//npm install --save react-navigation
import {StackNavigator,} from 'react-navigation';

import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Profile: { screen: ProfileScreen},
});

export default class App extends React.Component {
  render() {
    return (
        <SimpleApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
