import React, {Component} from 'react';
import { AppRegistry, Text, View, Picker} from 'react-native';

export default class PickerComponent extends React.Component {
    constructor(){
        super();
        this.state={
            category:'technology'
        }
    }

    onValueChange(key, value){
        console.log(key+':'+value);
        this.setState({category: value});
    }

    render() {
        return (
            <View>
                <Text>Pick a category</Text>
                <Picker selectedValue={this.state.category} onValueChange={this.onValueChange.bind(this,'category')}
                        prompt="Category"
                        enabled={true}
                        mode="dropdown" //default dialog
                >
                    <item label="Technology" value="technology"/>
                    <item label="Business" value="business"/>
                    <item label="Cooking" value="cooking"/>
                </Picker>

                <Text>Selected category: {this.state.category}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('PickerComponent',()=>PickerComponent);