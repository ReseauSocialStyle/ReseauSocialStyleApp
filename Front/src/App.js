import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import AddClotheForm from './Components/addClotheForm';
import WishlistsPage from './Components/WishlistsPage';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class App extends Component {
  render() {
    return (

<Router>
<div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/wishlists">Wishlists</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>

  <hr/>

  <Route exact path="/" component={Home}/>
  <Route path="/wishlists" component={WishlistsPage}/>
  <Route path="/about" component={AddClotheForm}/>
</div>
</Router>
    );
  }
}

export default App;
