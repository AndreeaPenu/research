import React from 'react';
import { AppRegistry, StyleSheet, Text,View,TouchableHighlight, TouchableOpacity } from 'react-native';

export default class Component2 extends React.Component {
    onPress(){
        console.log('Area Pressed');
    }

    onPress2(){
        console.log('Area2 Pressed');
    }


    render() {
        return (

            <View style={styles.container}>
                <TouchableHighlight style={styles.v1} onPress={this.onPress} underlayColor="blue">
                    <View >
                        <Text>First</Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
                    <View >
                        <Text>Second</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.v3}>
                    <Text style={styles.vText}>Third</Text>
                </View>
            </View>

        );
    }
}

AppRegistry.registerComponent('Component2',() => Component2);


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:100
    },
    v1: {
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2: {
        flex:1,
        backgroundColor:'yellow',
        padding:10
    },
    v3: {
        flex:1,
        backgroundColor:'black',
        padding:10
    },
    vText: {
        color:'white'
    }

});
