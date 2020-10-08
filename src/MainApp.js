import { Component } from 'react';
import './MainApp.css';
import React from 'react';
import MainNavBar from './components/navbar/MainNavBar'
import { Route, Switch, Link } from 'react-router-dom'
import { Sidenav } from 'rsuite';
import { Nav } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'

const styles = {
  width: 250,
  marginRight: 10,
  flexDirection: 'row',

};
class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOpenKeys: ['3', '4'],
    };
  }
  render() {
    return (

      <div >

        <div className="header">
          <MainNavBar />
        </div>

        <div className="main-app">
          <div appearance="inverse" >
            <div className="main-sidebar" style={styles} >
              <Sidenav defaultOpenKeys={this.state.defaultOpenKeys} style={{ backgroundColor: "MIDNIGHTBLUE" }}>
                <Sidenav.Body>
                  <Nav >
                    <Dropdown eventKey="106" title="Menu" icon={<Icon icon="magic" />}>
                      <Dropdown.Item  ><Link to="/submenu1">SubMenu1 </Link> </Dropdown.Item>
                      <Dropdown.Item  ><Link to="/submenu2">SubMenu2</Link></Dropdown.Item>
                    </Dropdown>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
            </div>
          </div>
          <div className="App-intro">
            <div>
              <Switch>
                <Route path="/submenu1"  />
                <Route path="/submenu2" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainApp;