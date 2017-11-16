import React, {Component} from 'react';
import { AppRegistry, Text, View, ListView, TouchableHighlight,StyleSheet, Image, Picker} from 'react-native';

export default class Posts extends React.Component {
    static navigationOptions = {
        title: 'Posts',
    };

    constructor(){
        super();
        this.state = {

        }
    }


    render() {
        return (
            <View>
                <Text>Post page</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Posts',()=>Posts);
