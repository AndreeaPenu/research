import React, {Component} from 'react';
import { AppRegistry, StyleSheet, View, Text, TextInput,Switch } from 'react-native';


export default class Component3 extends React.Component {
    constructor(){
        super();
        this.state = {
            textValue:'hello',
            switchValue:false
        }
    }

    onChangeText(value){
       this.setState({
           textValue:value
       })
    }

    onSubmit(){
        console.log('Input submitted');
    }

    onSwitchChange(value){
        this.setState({
            switchValue:value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter text"
                    value={this.state.textValue}
                    onChangeText={(value)=>this.onChangeText(value)}
                    onSubmitEditing={this.onSubmit}
                />
                <Text>{this.state.textValue}</Text>
                <Switch
                    value={this.state.switchValue}
                    onValueChange={(value)=>this.onSwitchChange(value)}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Component3',() => Component3);

const styles = StyleSheet.create({
    container:{
        marginTop:100
    }

});