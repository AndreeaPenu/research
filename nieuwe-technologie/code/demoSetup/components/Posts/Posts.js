import React, {Component} from 'react';
import { AppRegistry, Text, View, ListView, TouchableHighlight,StyleSheet, Image, Picker} from 'react-native';

export default class Posts extends React.Component {
    static navigationOptions = {
        title: 'Posts',
    };

    constructor(props){
        super(props);
        //empty listview
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state = {
            category:'food',
            limit:5,
            postDataSource: ds
        }
        this.renderRow = this.renderRow.bind(this);
    }

    //aanroepen
    componentDidMount(){
        this.fetchPosts();
    }

    fetchPosts(){
        fetch('https://www.reddit.com/r/'+this.state.category+'/top.json?limit='+this.state.limit)
            .then((response)=> response.json())
            .then((response)=> {
                //structuur API
                let posts = response.data.children;
                console.log(posts);
                //fill datasource
                this.setState({postDataSource:this.state.postDataSource.cloneWithRows(posts)});
            });
    }

    pressRow(post){
        const { navigate } = this.props.navigation;
        navigate('PostDetails',{title:post.data.title, score: post.data.score, comments: post.data.num_comments})

    }

    renderRow(post){
        let image;
        try{
            if(typeof post.data.preview.images[0].source.url == undefined){
                image = <Text></Text>
            }else{
                image = <Image style={styles.thumb} source={{uri: post.data.preview.images[0].source.url}}></Image>
            }
        }catch(e){
            console.log(e);
        }
        return(
            <TouchableHighlight onPress={()=>{
                this.pressRow(post);
            }}>
                <View style={styles.row}>
                    {image}
                    <Text style={styles.text}>{post.data.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    changeCategory(value){
        this.setState({category:value},()=>{
            this.fetchPosts();
        });
    }

    render() {
        return (
            <View>
                <Picker
                    selectedValue={this.state.category}
                    onValueChange={(value) => this.changeCategory(value)}
                >
                    <Picker.Item label="Food" value="food"/>
                    <Picker.Item label="Funny" value="funny"/>
                    <Picker.Item label="Gaming" value="gaming"/>
                    <Picker.Item label="News" value="news"/>
                </Picker>
                <ListView
                    dataSource={this.state.postDataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Posts',()=>Posts);

const styles = StyleSheet.create({
   row:{
       flexDirection:'row',
       justifyContent:'center',
       padding:12,
       backgroundColor:'#f6f6f6',
       marginBottom:3
   },
    text:{
       flex:3
    },
    thumb:{
       height:60,
        width:60,
        flex:1,
        margin:4
    }
});