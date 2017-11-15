import React, {Component} from 'react';
import { AppRegistry, Text, View,Dimensions, StyleSheet, TextInput, Switch, Button, AsyncStorage} from 'react-native';

export default class EditForm extends React.Component {
    static navigationOptions = {
        title: 'Edit',
    };

    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state = {
            id: params.id,
            text: params.text,
            completed: params.completed
        }
    }


    onTextChange(value){
        this.setState({text:value})
    }

    onCompletedChange(value){
        this.setState({completed:value})
    }

    onSubmit(){
        const { navigate } = this.props.navigation;
        console.log('Updating Todo');

        AsyncStorage.getItem('todos').then((value)=>{
            let todos = JSON.parse(value);

            for(i=0;i< todos.length; i++){
                if(todos[i].id == this.state.id){
                    todos.splice(i,1);
                }
            }
            todos.push({
                id: this.state.id,
                text: this.state.text,
                completed: this.state.completed
            });

            AsyncStorage.setItem('todos', JSON.stringify(todos));
            navigate('Todos');
        });
    }

    render() {
        return (
            <View style={styles.screen}>
                <TextInput
                    value={this.state.text}
                    placeholder="Todo Text"
                    onChangeText = {(value) => this.onTextChange(value)}
                />
                <View style={styles.completed}>
                    <Text>Completed</Text>
                    <Switch
                        value={this.state.completed}
                        onValueChange={(value)=>this.onCompletedChange(value)}
                    />
                </View>
                <View style={styles.submit}>
                    <Button
                        style={styles.btn}
                        onPress={this.onSubmit.bind(this)}
                        title="Submit"
                        color="#000000"
                    />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('EditForm',()=>EditForm);

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#2b4970',
        height: Dimensions.get('window').height,
        padding:20
    },
    completed:{
        flexDirection:'row'
    },
    submit:{
        marginTop:20
    }
});