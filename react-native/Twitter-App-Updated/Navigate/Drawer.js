
import React, { Component } from 'react';

import { Drawer } from 'react-navigation';

import { SideBar } from '../Menu/SideBar';

export default class DrawerExample extends Component {
  render(closeDrawer = () => {
    this.drawer.root.close();
  },
  openDrawer = () => {
    this.drawer.root.open();
  },) {
    
    return (
      <Drawer>
      ref={(ref) => { this.drawer = ref; }}content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()}
      </Drawer>
    );
    }
  }
