import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Expo from 'expo';
import { DrawerNavigator,StackNavigator} from 'react-navigation';
import home from './Tabs/Home';
import SideBar from './Menu/SideBar';

class AwesomeApp extends Component{
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true});
  }
  render() {
    if ( !this.state.isReady) {
      return <Expo.Apploading />;
    }
    return <HomeScreen />;
  }

};

const App = DrawerNavigator(
    {
      HomeScreen:{
          screen: home,
          path:"/",
      },
      SideBarScreen:{
        screen: SideBar,
        path:"/side",
      },
    },
    {
    initialRouteName:"HomeScreen",
    contentComponent: props => <SideBar {...props} />
  
    }
);

export default App;
