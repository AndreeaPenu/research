import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class FlexComponent2 extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.boxText}>Box 1</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.boxText}>Box 2 - This is some added text to box 2</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.boxText}>Box 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('FlexComponent2',()=>FlexComponent2);

const styles = StyleSheet.create({
   container:{
       flexDirection:'row',
       height:100,
       //justifyContent:'flex-end', //align right -> default: flex-start / ook: center , space-between/space-around
       //alignItems:'flex-start', //height goes by content that is in the box / default:stretch
       //flexWrap:'wrap' //als er meer boxen zijn -> op nieuwe lijn
   } ,
    box:{
       width:100,
        backgroundColor:'#FF5300',
        padding:10,
        marginRight:2
    }
});