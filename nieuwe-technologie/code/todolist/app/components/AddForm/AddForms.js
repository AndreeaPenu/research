import React, {Component} from 'react';
import { AppRegistry, Text, View,Dimensions, StyleSheet, TextInput, Switch, Button, AsyncStorage} from 'react-native';

export default class AddForms extends React.Component {
    static navigationOptions = {
        title: 'Add a Todo',
    };

    constructor() {
        super();
        this.state = {
            id: '',
            text: '',
            completed: false,
            todos: []
        }
    }

    componentDidMount(){
        this.generateId();
        this.getTodos();
    }

    getTodos(){
        AsyncStorage.getItem('todos').then((value)=>{
            if(value != undefined){
                this.setState({todos: JSON.parse(value)});
            }
        });
    }

    generateId(){
        let id = Math.floor(Math.random() * 100000000);
        this.setState({id});
    }

   onTextChange(value){
        this.setState({text:value})
   }

   onCompletedChange(value){
       this.setState({completed:value})
   }

   onSubmit(){
       const { navigate } = this.props.navigation;
       console.log('Adding Todo');
       let todos = this.state.todos;
       todos.push({
           id: this.state.id,
           text: this.state.text,
           completed: this.state.completed
       });

       AsyncStorage.setItem('todos', JSON.stringify(todos));
       navigate('Todos');
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

AppRegistry.registerComponent('AddForms',()=>AddForms);

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