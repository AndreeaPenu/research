import React, {Component} from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class FlexComponent extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render() {
        return (
            <View>
                <Text>FlexComponent</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('FlexComponent',()=>FlexComponent);