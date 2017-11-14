import React, {Component} from 'react';
import { AppRegistry, Text, View, Button, ScrollView} from 'react-native';

export default class ScrollViewComponent extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render() {
        return (
            <View>
                <Button title="Scroll" onPress={()=>{_scrollView.scrollTo({y:400})}}/>
               <ScrollView
                   ref={(scrollView)=>{_scrollView = scrollView}}
                //contentContainerStyle={{padding:20}}
                   horizontal={false} //horizontal scrolling
                   onContentSizeChange={(contentWidth, contentHeight)=> {console.log('height:'+contentHeight + ' width:'+contentWidth )}}
                   onScroll={()=>console.log('Scrolling...')}
                   pagingEnabled={false}
                   scrollEnabled={true}
                   showsHorizontalScrollIndicator={false}
                   showsVerticalScrollIndicator={true}
               >
                   <Text style={{fontSize:96}}>Start Scrolling</Text>
                   <Text style={{fontSize:96}}>Hello</Text>
                   <Text style={{fontSize:96}}>Hello</Text>
                   <Text style={{fontSize:96}}>Hello</Text>
                   <Text style={{fontSize:96}}>Hello</Text>
                   <Text style={{fontSize:96}}>Hello</Text>
                   <Text style={{fontSize:96}}>Hello</Text>
               </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('ScrollViewComponent',()=>ScrollViewComponent);