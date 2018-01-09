
import React, { Component } from 'react';

import { StyleSheet, ScrollView, Image } from 'react-native';

import {Container, Header, Item, Icon, Input, Button, Text} from 'native-base';

 export default class SearchBar extends Component {

   render() {

return (
  
<Container>
  
  <Header searchBar style={styles.footer}>

    <Item rounded>

      <Icon name="ios-arrow-dropleft" style={styles.ficon}/>

      <Input placeholder="   Search Twitter" />

      <Icon name="ios-people" />

    </Item>
       
    <Button transparent>

      <Text>Search Twitter</Text>
      
    </Button>

    </Header>

</Container>


   );}
    
}
const styles= StyleSheet.create(
  {
  footer:{
    backgroundColor:"white",
    borderColor:"gray",
    borderTopWidth:0.5, 
  },
  ficon:{
    color:"#2196F3",
  }
  }
);