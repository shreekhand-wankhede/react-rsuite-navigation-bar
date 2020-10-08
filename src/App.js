import React from 'react';
import MainApp from './MainApp';
import { observer } from "mobx-react";

class App extends React.Component {
  render() {
        return (
          <MainApp />
        ); 
  }
}
export default observer(App);