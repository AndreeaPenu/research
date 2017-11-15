import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

import Todos from './app/components/Todos/Todos';
import AddForms from './app/components/AddForm/AddForms';
import TodoDetails from './app/components/TodoDetails/TodoDetails';
import EditForm from './app/components/EditForm/EditForm';

import {StackNavigator,} from 'react-navigation';

    const SimpleApp = StackNavigator({
        Todos: {screen: Todos},
        AddForms: {screen: AddForms},
        TodoDetails: {screen: TodoDetails},
        EditForm: {screen: EditForm}
});

export default class App extends React.Component {
    render() {
        return (

                <SimpleApp/>

        );
    }
}

AppRegistry.registerComponent('App',()=>App);

const styles = StyleSheet.create({
    screen:{
        backgroundColor:'#2b4970',
        //height:Dimensions.get('window').height
    },
})