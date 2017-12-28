import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import { DrawerNavigator,StackNavigator} from 'react-navigation';
import home from './Tabs/Home';
import SideBar from './Menu/SideBar';

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
