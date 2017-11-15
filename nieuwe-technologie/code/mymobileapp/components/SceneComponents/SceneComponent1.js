import React, {Component} from 'react';
import { AppRegistry, Text, View, ToolbarAndroid, TouchableHighlight, StyleSheet} from 'react-native';

export default class SceneComponent1 extends React.Component {
    navScene2(){
        //change page
        this.props.navigator.push({
            id:'scene2'
        });
    }
    render() {
        return (
            <View>
                <View>
                    <ToolbarAndroid style={styles.toolbar} title={this.props.title}/>
                    <TouchableHighlight onPress={this.navScene2.bind(this)}>
                        <Text> Go to scene2 </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('SceneComponent1',()=>SceneComponent1);

const styles = StyleSheet.create({
   toolbar:{
       height:58,
       backgroundColor:'#f6f6f6'
   }
});