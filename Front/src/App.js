import React, { Component } from 'react';
import './App.css';

import LoginPage from './Containers/LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome !</h1>
        <LoginPage />
      </div>
    );
  }
}

export default App;
