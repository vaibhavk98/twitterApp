
import React, { Component } from 'react';

import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { navigation, navigate } from 'react-navigation';

import { Container, Content, Footer, FooterTab, Text, Header, Item, HeaderTab, View, Title, Button, Left, Right, Tab, Tabs, TabHeading, Icon } from 'native-base';

import { font } from 'expo';

import Tab1 from './HomeTabs/tabOne';

import Tab2 from './HomeTabs/tabTwo';

import Tab3 from './HomeTabs/tabThree';

import Tab4 from './HomeTabs/tabFour';

import ButtonOne from './HomeTabs/Button/buttonOne';

import CardImageExample from './HomeTabs/tabOne';

export default class AdvancedTabsExample extends Component {
  
  render() {

    return (
      
    <Container style={{backgroundColor:"#3F51B5"}}>
      <Header style={{marginTop:-100}} hasTabs/>
      <Item style={{backgroundColor:"#BBDEFB"}}>
        <Left>
          <TouchableOpacity>
      <Button transparent style={{marginTop:25, marginBottom:4}}><Icon name="ios-menu" style={styles.ficon} onPress={() => this.props.navigation.navigate('DrawerToggle')} /></Button>
      </TouchableOpacity>
      </Left>
      <Left>
      <Text style={{fontSize:25, marginLeft:-115, marginTop:25, marginBottom:5}}>Home</Text>
      </Left>
      </Item>
        <Tabs>
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
    backgroundColor:"#E3F2FD",
    borderColor:"gray",
    borderTopWidth:0.5, 
  },
  ficon:{
    color:"#2196F3",
  },
  }
);