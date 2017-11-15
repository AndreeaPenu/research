import React, {Component} from 'react';
import { AppRegistry, Text, View, ToolbarAndroid, TouchableHighlight, StyleSheet} from 'react-native';

export default class SceneComponent2 extends React.Component {
    navScene1(){
        //change page
        this.props.navigator.push({
            id:'scene1'
        });
    }
    render() {
        return (
            <View>
                <View>
                    <ToolbarAndroid style={styles.toolbar} title={this.props.title}/>
                    <TouchableHighlight onPress={this.navScene1.bind(this)}>
                        <Text> Go to scene1 </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('SceneComponent2',()=>SceneComponent2);

const styles = StyleSheet.create({
    toolbar:{
        height:58,
        backgroundColor:'#f6f6f6'
    }
});