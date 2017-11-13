import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Component2></Component2>
      </View>
    );
  }
}

AppRegistry.registerComponent('App',() => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
