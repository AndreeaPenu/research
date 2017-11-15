import React, {Component} from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class GeolocationComponent extends React.Component {
    constructor(){
        super();
        this.state={
            position:'unknown'
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position)=>{
            let myPosition = JSON.stringify(position);
            this.setState({position: myPosition})
        },
            (error)=>alert(JSON.stringify(error)));
    }

    render() {
        return (
            <View>
                <Text>POSITION: {this.state.position}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('GeolocationComponent',()=>GeolocationComponent);