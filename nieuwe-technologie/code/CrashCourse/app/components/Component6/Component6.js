import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native';


export default class Component6 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.user.name,
            email: this.props.user.email
        }
    }
    onPress(){
        this.props.navigator.push({
            id:'component5'
        });
    }
    render() {
        return (
            <View>
                <Text>{this.state.name}</Text>
                <Text>{this.state.name}</Text>
                <Button
                    onPress={this.onPress.bind(this)}
                    title="Go Back"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Component6',() => Component6);



