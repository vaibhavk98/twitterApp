
import React, { Component } from 'react';

import { Container, Header, View, Button, Icon, Fab } from 'native-base';

import leaf from 'react-native-vector-icons';

export default class FABExample extends Component {

  constructor(props) {

    super(props);

    this.state = {

      active: 'true',
      inactive: 'true'

    };
  }

  render() {

    return (  

      <Container>

        <Header />

        <View style={{ flex: 1 }}>

          <Fab

            active={this.state.active}

            direction="up"

            containerStyle={{ }}

            style={{ backgroundColor: '#2196F3' }}

            position="bottomRight"

            onPress={() => this.setState({ active: !this.state.active })}>

            <Icon name="ios-create" />

            <Button style={{ backgroundColor: '#34A34F' }} source={{uri: 'https://www.whatsapp.com/'}}>

              <Icon name="logo-whatsapp" />

            </Button>

            <Button style={{ backgroundColor: '#3B5998' }} souce={{uri: 'https://en-gb.facebook.com/'}}>

              <Icon name="logo-facebook" />

            </Button>

            <Button style={{ backgroundColor: '#DD5144' }} source={{uri: 'https://accounts.google.com/SignUp?hl=en-GB'}}>

              <Icon name="mail" />

            </Button>

          </Fab>

        </View>

      </Container>

    );

  }

}