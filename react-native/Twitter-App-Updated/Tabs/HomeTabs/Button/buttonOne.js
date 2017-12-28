
import React, { Component } from 'react';
import { Header, Button, TouchableOpacity, Icon } from 'native-base';

export default class ButtonExample extends Component {
render() {   
    return (
            <Header>
            <Button light>
                <TouchableOpacity>onPress={() => this.props.navigation.navigate("DrawerToggle")}>
                <Icon name="menu" />
                </TouchableOpacity>
              </Button>
              </Header>
         );
    }
}
