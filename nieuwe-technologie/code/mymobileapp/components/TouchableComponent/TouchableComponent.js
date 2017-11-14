import React, {Component} from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class TouchableComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            toggle:true
        }
    }

    render() {
        let isToggle = this.state.toggle ? 'YES':'NO';
        return (
            <View>
                <Text>{isToggle}</Text>
                <TouchableHighlight
                    underlayColor='red'
                    onPress={()=> this.setState({toggle:!this.state.toggle})}>
                    <Text style={styles.toggle}> Toggle </Text>
                </TouchableHighlight>

                <TouchableOpacity
                    onPress={()=> this.setState({toggle:!this.state.toggle})}>
                    <Image source={require('./button.png')} style={styles.button}/>
                </TouchableOpacity>
            </View>
        );
    }
}

AppRegistry.registerComponent('TouchableComponent',()=>TouchableComponent);

const styles = StyleSheet.create({
   toggle:{
       padding:8,
       backgroundColor:'#ccc'
   },
    button:{
       height:50,
        width:50
    }
});