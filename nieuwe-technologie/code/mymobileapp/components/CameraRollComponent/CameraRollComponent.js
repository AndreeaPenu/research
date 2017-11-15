import React, {Component} from 'react';
import { AppRegistry, Text, View, CameraRoll, Image, ScrollView, StyleSheet, ToolbarAndroid,ActivityIndicator} from 'react-native';

export default class CameraRollComponent extends React.Component {
    constructor(){
        super();
        this.state={
            images:[],
            imagesLoaded: false
        }
    }

    componentWillMount(){
        CameraRoll.getPhotos({first:5}).then((data)=>{
            const assets = data.edges;
            const images = assets.map((asset)=>asset.node.image);
            this.setState({
                imagesLoaded:true,
                images:images
            });
        },
            (error)=>{
            console.log(error);
            });
    }

    render() {
        if(!this.state.imagesLoaded){
            return(
                <ActivityIndicator
                    style={[styles.centering,styles.gray]}
                    size="large"
                    color="black"
                />
            )
        }
        return (
            <View>
                <ToolbarAndroid
                    style={styles.toolbar}
                    title="My photos"
                />
                <ScrollView style={styles.container}>
                    <View style={styles.imageGrid}>
                        {this.state.image.map((image)=> <Image style={styles.image} key={image.uri} source={{uri: image.uri}}/>)}
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    toolbar:{
        height:58,
        backgroundColor:'#f6f6f6'
    },
    imageGrid:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10
    },
    image:{
        width:180,
        height:180
    },
    centering:{
        alignItems:'center',
        justifyContent:'center',
        padding:8
    },
    gray:{
        backgroundColor:'#cccccc'
    }
});
AppRegistry.registerComponent('CameraRollComponent',()=>CameraRollComponent);