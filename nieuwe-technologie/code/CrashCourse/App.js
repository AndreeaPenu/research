import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Navigator } from 'react-native';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';
import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

export default class App extends React.Component {
  renderScene(route, navigator){
    switch(route.id){
        case 'component5':
          return (<Component5 navigator={navigator} title="component5"/>)
        case 'component6':
            return (<Component6 user={route.user} navigator={navigator} title="component6"/>)
    }
  }
  render() {
    return (
      <View>
        <Navigator
          initialRoute={{id:'component5'}}
          renderScene={this.renderScene}
          configureScreen={(route, routeStack)=>Navigator.SceneConfigs.FloatFromBottom}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('App',() => App);




