import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ListView, TouchableHighlight, Button, AsyncStorage, Image} from 'react-native';


export default class Todos extends React.Component {
    static navigationOptions = {
        title: 'Todos',
    };


    constructor(){
        super();
        //create datasource
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state={
            todoDataSource: ds
        }
        this.pressRow = this.pressRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }
    //before & after component mounted
    componentDidMount(){
        this.getTodos();
    }

    componentWillMount(){
        this.getTodos();
    }

    pressRow(todo){
        const { navigate } = this.props.navigation;
        navigate('TodoDetails', {title:todo.text, id: todo.id, text: todo.text, completed: todo.completed});
    }

    //tdo = row item
    renderRow(todo,sectionId,rowId,highlightRow){
        let image;
        if(todo.completed){
            image = <Image
                style={styles.checkImage}
                source={require('./check.png')}/>
        } else{
            image = <Text></Text>
        }
      return(
          <TouchableHighlight onPress={()=> {
              this.pressRow(todo);
          }}>
              <View style={styles.row}>
                  <Text style={styles.text}>{todo.text}</Text>
                  <View style={styles.check}>
                      {image}
                  </View>
              </View>
          </TouchableHighlight>
      )
    }

    getTodos(){
        AsyncStorage.getItem('todos').then((value)=>{
            if(value == undefined){
                console.log('No todos..');
            }else{
                let todos = JSON.parse(value);
                this.setState({
                    todoDataSource:this.state.todoDataSource.cloneWithRows(todos)
                });
            }

        });
        //put in state & datasource
        let todos = [
            {text: 'Todo one', completed: false},
            {text: 'Todo two', completed: false},
            {text: 'Todo three', completed: false}
        ];

        this.setState({
            todoDataSource:this.state.todoDataSource.cloneWithRows(todos)
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.screen}>
                <Button
                    title="Add Todo"
                    style={styles.buttonAdd}
                    onPress={() => navigate('AddForms')}
                />
                <ListView
                    dataSource={this.state.todoDataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Todos',()=>Todos);
const styles = StyleSheet.create({
    screen:{
        backgroundColor:'#2b4970',
        height:Dimensions.get('window').height
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#b0d4ff',
        marginBottom:3
    },
    text:{
        flex:1
    },
    buttonAdd: {
        backgroundColor:'#000000',
        padding:10,
        marginBottom:10
    },
    check:{
        flex:1
    },
    checkImage:{
        alignSelf:'flex-end',
        height:20,
        width:20
    }

})