import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Clipboard} from 'react-native';

export default class ClipboardComponent extends React.Component {
    constructor(){
        super();
        this.state={
            text:'Nothing'
        }
    }

    setClipboardText(){
        Clipboard.setString('Hello from clipboard');
        Clipboard.getString().then((text)=>{
        this.setState({text});
        });
    }

    render() {
        return (
            <View>
                <Text onPress={this.setClipboardText.bind(this)}>
                    Tap here
                </Text>
                <Text style={{color:'green', margin:20}}>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('ClipboardComponent',()=>ClipboardComponent);