import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class PostDetails extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(){
        super();
        this.state={

        }
    }

    render() {
        return (
            <View>
                <Text>Post details page</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('PostDetails',()=>PostDetails);