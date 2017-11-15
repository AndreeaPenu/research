import React, {Component} from 'react';
import { AppRegistry, Text, View, AsyncStorage, TextInput} from 'react-native';

const todos = [
    {name:'todo1'},
    {name:'todo2'},
    {name:'todo3'},
    {name:'todo4'}

];

export default class AsyncStorageComponent extends React.Component {
    constructor(){
        super();
        this.state={
            name:''
        }
    }

    saveName(value){
        AsyncStorage.setItem('name',value);
        this.setState({name:value});
    }

    getName(){
        AsyncStorage.getItem('name').then((value)=>{
            this.setState({name:value});
        });
    }

    saveTodos(){
        AsyncStorage.setItem('todos', JSON.stringify(todos));
    }

    getTodos(){
        AsyncStorage.getItem('todos').then((value)=>{
            console.log(JSON.parse(value));
        });
    }

    componentWillMount(){
        this.getName();
        this.saveTodos();
        this.getTodos();
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Type name"
                    onSubmitEditing={(e)=>this.saveName(e.nativeEvent.text)} //wat er wordt ingetypt
                />
                <Text>Current Name: {this.state.name}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('AsyncStorageComponent',()=>AsyncStorageComponent);