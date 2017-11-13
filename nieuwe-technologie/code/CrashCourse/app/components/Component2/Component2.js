import React from 'react';
import { AppRegistry, StyleSheet, Text,View } from 'react-native';

export default class Component2 extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.v1}>
                        <Text>Vieuw1</Text>
                    </View>
                    <View style={styles.v2}>
                        <Text>Vieuw2</Text>
                    </View>
                    <View style={styles.v3}>
                        <Text>Vieuw3</Text>
                    </View>

                </View>
            </View>

        );
    }
}

AppRegistry.registerComponent('Component2',() => Component2);

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:100
    },
    v1:{
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2:{
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    v3:{
        flex:1,
        backgroundColor:'yellow',
        padding:10
    }
});
