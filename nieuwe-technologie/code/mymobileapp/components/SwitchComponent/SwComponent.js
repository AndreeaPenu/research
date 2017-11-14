import React, {Component} from 'react';
import { AppRegistry, Text, View, Switch} from 'react-native';

export default class SwComponent extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    static defaultProps = {
        value:false
    }

    onValueChange(value){
        console.log(value);
        this.setState({value:value});
    }


    render() {
        let toggle = this.state.value ? 'ON' : 'OFF';
        return (
            <View>
                <Text>{toggle}</Text>
                <Switch
                    onValueChange={(value)=>this.onValueChange(value)}
                    value={this.state.value}
                    onTintColor='red'
                    tintColor='black'
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('SwComponent',()=>SwComponent);