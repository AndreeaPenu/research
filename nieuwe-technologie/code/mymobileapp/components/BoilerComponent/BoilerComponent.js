import React, {Component} from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class BoilerComponent extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render() {
        return (
            <View>
              <Text>BoilerComponent</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('BoilerComponent',()=>BoilerComponent);