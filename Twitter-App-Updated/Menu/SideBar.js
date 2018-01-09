
import React, { Component } from 'react';
import { Container, Header, Title, Thumbnail, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,List,ListItem} from 'native-base';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
export default class SideBar extends Component {
        constructor(props) {    
           super(props);   
            this.state = { 
                shadowOffsetColor: "white",
                shadowOffsetWidth: 0.8, 
                shadowRadius: 2,    
            };   
        }
        render(){
            let folowers= `      46 `;
            let folowing= ` 22 `;
            return(
                <Container style={{marginTop:25}}>
                    <Content>
                        <Thumbnail source={{ uri :'https://static.pexels.com/photos/2422/sky-earth-galaxy-universe.jpg'}} style={{marginLeft:25}}/>
                  <Text style={{fontSize:18,fontWeight:"500",marginLeft:25}}>
                    Vaibhav Kulkarni
                   </Text>
                   <Text style={{fontSize:15,color:"gray",marginBottom:5,marginLeft:25}}>
                    @vaibhavk98
                     </Text> 
                     <Text style={{marginTop:8,marginLeft:20}}> 
                     <Text style={{fontWeight: 'bold',}}>
                     {folowing}
                    </Text>
                    <Text style={{fontSize:14,color:"gray"}}>
                    Following
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>
                    {folowers }
                    </Text>
                    <Text style={{fontSize:14,color:"gray"}}>
                    Followers
                    </Text>    
                    </Text>
                    <List style={{borderTopWidth:0.7,marginTop:15,borderTopColor:"gray"}}>
                                <ListItem icon button noBorder style={{marginTop:7,marginBottom:6}}>
                                <Left>
                                <Icon name="ios-person" style={styles.isize}/>
                                </Left>
                                <Body style={{borderBottomColor:"white"}}>
                                <Text style={styles.ifsize}>Profile</Text>
                                </Body>
                                </ListItem>
                                <ListItem icon button noBorder style={{marginTop:7,marginBottom:6}}>
                                <Left>
                                <Icon name="md-list-box" style={styles.isize}/>
                                </Left>
                                <Body style={{borderBottomColor:"white"}}>
                                <Text style={styles.ifsize}>Lists</Text>
                                </Body>
                                </ListItem>
                                <ListItem icon button noBorder style={{marginTop:7,marginBottom:6}}>
                                <Left>
                                <Icon name="ios-thunderstorm-outline" style={styles.isize}/>
                                </Left>
                                <Body style={{borderBottomColor:"white"}}>
                                <Text style={styles.ifsize}>Moments</Text>
                                </Body >
                                </ListItem>
                                <ListItem icon button noBorder style={{marginTop:7,marginBottom:6}}>
                                <Left>
                                <Icon name="md-copy" style={styles.isize}/>
                                </Left>
                                <Body style={{borderBottomColor:"white"}}>
                                <Text style={styles.ifsize}>Highlights</Text>
                                </Body>
                                </ListItem>
                                </List>
                                <List style={{borderTopWidth:0.4,marginTop:20,borderTopColor:"gray"}}>
                                <ListItem button noBorder>
                                <Text style={{fontSize:19}}>Settings and privacy</Text>
                                </ListItem>
                                <ListItem button noBorder>
                                <Text style={{fontSize:19}}>Help Centre</Text>
                                </ListItem>
                                </List>
                                </Content>
                                <Footer>
                                <FooterTab style={styles.footer}>
                                <Left>
                                <Button transparent>
                                <Icon name='md-moon' style={styles.ficon}/>
                                </Button>
                                </Left>
                                <Right>
                                <Button transparent>
                                <Icon name='md-barcode' style={styles.ficon}/>
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
      borderTopWidth:0.5, 
    },
    ficon:{
      color:"#2196F3",
    },
    isize:{
        fontSize:30,
        width:37,
    },
    ifsize:{
        fontSize:19,
    }
    } 
);
