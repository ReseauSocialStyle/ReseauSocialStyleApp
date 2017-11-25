import React, { Component } from 'react';
import logo from '../logo.svg';
import './style/App.css';
import LookCreationPage from "./LookCreationPage"

class App extends Component {
  state = {
    look: {},
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <LookCreationPage/>
      </div>
    );
  }
}

export default App;
