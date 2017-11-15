import React, {Component} from 'react';
import { AppRegistry, Text, View, StatusBar} from 'react-native';

export default class StatusBarComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            barColor:this.props.barColor
        }
    }

    static defaultProps = {
        barColor:'steelblue'
    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={this.state.barColor}
                    barStyle="dark-content" //standaard light-content
                    hidden={false}
                    translucent={false}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('StatusBarComponent',()=>StatusBarComponent);