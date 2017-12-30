
import React, { Component } from 'react';

import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { navigation, navigate, } from 'react-navigation';

import { Container, Navigator, Content, Footer, FooterTab, Text, Header, Item, HeaderTab, View, Title, Button, Left, Right, Tab, Tabs, TabHeading, Icon } from 'native-base';

import { Font }  from 'react-native-vector-icons';

import Expo from 'expo';

import Tab1 from './HomeTabs/tabOne';

import Tab2 from './HomeTabs/tabTwo';

import Tab3 from './HomeTabs/tabThree';

import Tab4 from './HomeTabs/tabFour';

import ButtonOne from './HomeTabs/Button/buttonOne';

import CardImageExample from './HomeTabs/tabOne';

import SplashTwitter from './HomeTabs/SplashPage/SplashScreen';

export default class AdvancedTabsExample extends Component {

  render() {

    return (

    <Container style={{backgroundColor:"#3F51B5"}}>
      <Header style={{marginBottom:-35}} hasTabs/>
      <Item style={{backgroundColor:"white"}}>
        <Left>
          <TouchableOpacity>
      <Button transparent style={{marginTop:10, marginBottom:5.5}}><Icon name="ios-menu" style={{color:"#3F51B5"}} onPress={() => this.props.navigation.navigate('DrawerToggle')} /></Button>
      </TouchableOpacity>
      </Left>
      <Left>
      <Text style={{fontSize:25, marginLeft:-100, marginTop:10, marginBottom:6.5}}>Home</Text>
      </Left>
        <Icon name="logo-twitter" style={{color:"#2196F3"}} source={{uri: 'https://twitter.com/?lang=en-in'}} />
      </Item>
        <Tabs style={{marginTop:-5}}>
          <Tab heading={ <TabHeading style={styles.footer}><Icon name="ios-home" style={styles.ficon}/></TabHeading>}>
          <Tab1/>        
          </Tab>
          <Tab heading={ <TabHeading style={styles.footer}><Icon name="ios-search" style={styles.ficon}/></TabHeading>}>
          <Tab2/>
          </Tab>
          <Tab heading={ <TabHeading style={styles.footer}><Icon transparent name="ios-notifications" style={styles.ficon}/></TabHeading>}>
          <Tab3/>
          </Tab>
          <Tab heading={ <TabHeading style={styles.footer}><Icon transparent name="mail" style={styles.ficon}/></TabHeading>}>
          <Tab4/>
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab style={styles.footer}>
          <Left>
            <Button transparent>
              <Text>   All</Text>
            </Button>
            </Left>
            <Button transparent>
              <Text>Mentions</Text>
            </Button>
            <Button transparent>
            </Button>
            <Right>
            <Button transparent>
              <Icon name="ios-settings" style={styles.ficon}/>
              </Button>
              </Right>
          </FooterTab>
        </Footer>
    </Container>
    );
  }
}

const styles= StyleSheet.create(
  {
  footer:{
    backgroundColor:"white",
    borderColor:"gray",
    borderTopWidth:0.4, 
  },
  ficon:{
    color:"#2196F3",
  },
  }
);