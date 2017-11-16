import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

import {StackNavigator,} from 'react-navigation';

const SimpleApp = StackNavigator({
    Posts: {screen: Posts},
    PostDetails: {screen: PostDetails}
});

export default class App extends React.Component {
    render() {
        return (
            <SimpleApp/>
        );
    }
}

AppRegistry.registerComponent('App',()=>App);

