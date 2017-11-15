import React, {Component} from 'react';
import { AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';

const todos = [
    {name: 'Clean the kitchen'},
    {name: 'Walk the dog'},
    {name: 'Go shopping'}

]
export default class ListViewComponent extends React.Component {
    constructor(){
        super();
        //if its changed then upate it
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state={
            todoDataSource: ds.cloneWithRows(todos)
        }

        this.pressRow = this.pressRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }



    pressRow(rowId){
        console.log('Row'+rowId+' pressed');
    }

    renderRow(todo,sectionId,rowId,highlightRow){
        return(
            <TouchableHighlight onPress={()=>{this.pressRow(rowId); highlightRow(sectionId,rowId)}}>
                <View style={styles.row}>
                    <Text style={styles.text}>{todo.name}</Text>
                </View>
            </TouchableHighlight>

                );
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.todoDataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('ListViewComponent',()=>ListViewComponent);

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#f6f6f6',
        marginBottom:3
    },
    text:{
        flex:1
    }
});