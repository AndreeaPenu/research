import React from 'react';
import { AppRegistry, StyleSheet, View, Text, ListView, TouchableHighlight } from 'react-native';

export default class Component5 extends React.Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.state = {
            userDataSource: ds,
        };
    }

    componentDidMount(){
        this.fetchUsers();
    }

    //populate listview
    fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((response)=>{
                this.setState({
                    userDataSource:this.state.userDataSource.cloneWithRows(response)
                });
            });
    }

    onPress(user){
        this.props.navigator.push({
            //userdetails
            id:'component6',
            user: user
        });
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
            <TouchableHighlight onPress={()=>{this.onPress(user)}}>
                <View style={styles.row}>
                    <Text style={styles.rowText}>{user.name}: {user.email}</Text>
                </View>
            </TouchableHighlight>
                )

    }

    render() {
        return (
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

AppRegistry.registerComponent('Component5',() => Component5);

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#f4f4f4',
        marginBottom:3
    },
    rowText:{
        flex:1
    }

});