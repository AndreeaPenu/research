import React from 'react';
import { AppRegistry, StyleSheet, View, Text, ListView } from 'react-native';

const users = [
    {name:'John'},
    {name:'Brad'},
    {name:'Steve'},
    {name:'Janet'}
]

export default class Component4 extends React.Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.state = {
            userDataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
        <View style={styles.row}>
            <Text style={styles.rowText}>{user.name}</Text>
        </View>)
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

AppRegistry.registerComponent('Component4',() => Component4);

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

