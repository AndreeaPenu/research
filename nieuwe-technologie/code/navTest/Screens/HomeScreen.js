import React, {Component} from 'react';
import { AppRegistry, Text, View, Button} from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
        <View>
            <Text>Hello, nav</Text>
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name:'Jane'})}
            />

        </View>
        );
    }
}


AppRegistry.registerComponent('HomeScreen',()=>HomeScreen);