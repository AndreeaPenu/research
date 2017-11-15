/**
 * Created by Andre on 15-Nov-17.
 */
import React, {Component} from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        return (
            <View>
                <Text>Jane's profile</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('ProfileScreen',()=>ProfileScreen);