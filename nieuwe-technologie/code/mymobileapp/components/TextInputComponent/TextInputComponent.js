import React, {Component} from 'react';
import { AppRegistry, Text, View, TextInput} from 'react-native';

export default class TextInputComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: this.props.value
        }
    }

    static defaultProps = {
        value: 'Hello world'
    }

    onChangeText(value){
        this.setState({value:value});
    }

    onSubmitEditing(e){
        console.log('onSubmitEditing Called:'+e);
    }

    onBlur(e) {
        console.log('onBlur Called:'+e);
    }

    onFocus(e){
        console.log('onFocus Called:'+e);
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Type something"
                    value={this.state.value}
                    maxLength={10}
                    selectionColor='red'
                    selectTextOnFocus={false}
                    editable={true}
                    onFocus = {(e)=>this.onFocus(e)}
                    onBlur={(e)=>this.onBlur(e)}
                    onChangeText = {(value)=>this.onChangeText(value)}
                    onSubmitEditing={(e)=>this.onSubmitEditing(e.nativeEvent.text)} //get whats in textbox
                />
                <Text>{this.state.value}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('TextInputComponent',()=>TextInputComponent);