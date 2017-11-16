import React, {Component} from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class PostDetails extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        this.state={
            title: params.title,
            score: params.score,
            comments: params.num_comments
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.title}</Text>
                <Text>Score: {this.state.score} | Comments: {this.state.comments}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('PostDetails',()=>PostDetails);