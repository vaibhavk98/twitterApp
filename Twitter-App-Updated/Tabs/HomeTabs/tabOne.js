
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Item, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';
import ButtonTwo from './Button/buttonTwo';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Content style={{marginBottom:-570}}>
          <Card>
            <CardItem>
            <Left>
                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/Fsevs_fTfM8/mqdefault.jpg'}} />
                <Body>
                  <Text>Nature</Text>
                  <Text note>@care</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://s1.1zoom.net/big3/404/413709-svetik.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>56</Text>
                </Button>
                </Left>
                <Left>
                <Button transparent>
                <Icon active name="repeat" />
                <Text>123</Text>
                </Button>
                </Left>
                <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>40</Text>
                </Button>
                </Left>
                <Left>
                <Button transparent>
                <Icon active name="mail" />
                <Text>22</Text>
                </Button>
                </Left>
                <Text>just now</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Left>
                <Thumbnail source={{uri: 'http://www.punjabigraphics.com/images/158/Sweet-Kitten-Animal-Image.jpg'}} />
                <Body>
                  <Text>Cute</Text>
                  <Text note>@LoveYourPet</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://static.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>220</Text>
                </Button>
              </Left>
              <Left>
                <Button transparent>
                <Icon active name="repeat" />
                <Text>53</Text>
                </Button>
                </Left>
              <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>4</Text>
                </Button>
                </Left>
                <Left>
                <Button transparent>
                <Icon active name="mail" />
                <Text>9</Text>
                </Button>
              </Left>
              <Right>
                <Text>31 minutes ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <Left>
                <Thumbnail source={{uri: 'https://i.ytimg.com/vi/5g_jh8497bI/maxresdefault.jpg'}} />
                <Body>
                  <Text>Colourful</Text>
                  <Text note>@Iamflying</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.xsjjys.com/data/out/187/WHDQ-513248814.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>67</Text>
                </Button>
                </Left>
                <Left>
                <Button transparent>
                <Icon active name="repeat" />
                <Text>35</Text>
                </Button>
                </Left>
                <Left>
                <Button transparent>
                  <Icon active name="heart" />
                  <Text>14</Text>
                </Button>
                </Left>
                <Left>
                <Button transparent>
                <Icon active name="mail" />
                <Text>11</Text>
                </Button>
                </Left>
                <Text>1d ago</Text>
            </CardItem>
          </Card>
        </Content>
      <ButtonTwo position="bottomRight"/>
      </Container>
    );
  }
}