
import React, { Component } from 'react';

import { View, Icon } from 'native-base';

import Splash from 'react-native-splash-screen';

export default class SplashTwitter extends Component {

    componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                id: 'MainView', //<-- This is the View you go to
            });
        }, 2000); //<-- Time until it jumps to "MainView" 
    }


    render() {
         
        return (

            <View style={{backgroundColor:"blue", flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Icon name="logo-twitter" />
            </View>

        );
    }
}