import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Share, TouchableHighlight} from 'react-native';

export default class ShareComponent extends React.Component {
    constructor(){
        super();
        this.state={
            result:''
        }
    }

    shareMessage(){
        console.log('share message');
        Share.share({
            message:'Hey how are you'
        })
            //if everything is ok
            .then(this.showResult)
            .catch((error)=>this.setState({result:'error: '+ error.message}))
    }

    showResult(result){
        console.log('result');
        if(result.action === Share.shareAction){
            this.setState({result:'Shared'});
        }else if(result.action === Share.dismissedAction){
            this.setState({result:'Dismissed'});
        }
    }

    render() {
        return (
            <View>
               <TouchableHighlight style={styles.wrap}
               onPress={this.shareMessage}>
                   <View style={styles.button}>
                       <Text>Share Message</Text>
                   </View>
               </TouchableHighlight>
                <Text>{this.state.result}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('ShareComponent',()=>ShareComponent);

const styles = StyleSheet.create({
    wrap:{
      marginBottom:5
    },
    button:{
        backgroundColor:'#cccccc',
        padding:10
    }
});