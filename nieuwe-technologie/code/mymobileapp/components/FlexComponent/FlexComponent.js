import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class FlexComponent extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render() {
        return (
            <View>
                <View style={styles.topContainer}>
                    <View style={styles.box1}>
                        <Text>Box1</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text>Box2</Text>
                    </View>
                    <View style={styles.box3}>
                        <Text>Box3</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.box4}>
                        <Text>Box1</Text>
                    </View>
                    <View style={styles.box5}>
                        <Text>Box2</Text>
                    </View>
                    <View style={styles.box6}>
                        <Text>Box3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('FlexComponent',()=>FlexComponent);

const styles = StyleSheet.create({
   topContainer:{
       flexDirection:'row',
       height:100
   },
    box1:{
        flex:1,
        backgroundColor:'#FF5300',
        padding:10

    },
    box2:{
        flex:1,
        backgroundColor:'#FF7431',
        padding:10
    },
    box3:{
        flex:1,
        backgroundColor:'#FF9700',
        padding:10
    },
    bottomContainer:{
        flexDirection:'column',
        height:560
    },
    box4:{
        flex:1,
        backgroundColor:'#FF5300',
        padding:10

    },
    box5:{
        flex:1,
        backgroundColor:'#FF7431',
        padding:10
    },
    box6:{
        flex:1,
        backgroundColor:'#FF9700',
        padding:10
    }
});