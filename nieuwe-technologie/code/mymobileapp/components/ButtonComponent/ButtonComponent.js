import React, {Component} from 'react';
import { AppRegistry, Text, View, Button, Alert} from 'react-native';

const alertMessage = 'this is your message';
export default class ButtonComponent extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    btnPress(){
       // Alert.alert('Alert title', alertMessage);
        Alert.alert('Danger','Are you sure you want to do this?',[
            {text:'Cancel', onPress:() => console.log('Cancel pressed')},
            {text:'Ok', onPress:() => console.log('Ok pressed')}
        ])
    }

    render() {
        return (
            <View>

                <Button
                    title="Learn more"
                    color="red"
                    accessibilityLabel="This is a button"
                    onPress={this.btnPress}
                    //disabled={true}
                />

                <Button
                    title="Learn more"
                    color="orange"
                    accessibilityLabel="This is a button"
                    onPress={this.btnPress}
                    //disabled={true}
                />

                <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                    <Button
                        title="Learn more"
                        color="red"
                        accessibilityLabel="This is a button"
                        onPress={this.btnPress}
                        //disabled={true}
                    />

                    <Button
                        title="Learn more"
                        color="orange"
                        accessibilityLabel="This is a button"
                        onPress={this.btnPress}
                        //disabled={true}
                    />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('ButtonComponent',()=>ButtonComponent);