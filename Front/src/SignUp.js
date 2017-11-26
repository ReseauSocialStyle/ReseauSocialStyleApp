import React, { Component } from 'react';
import Input from 'react-input-password'
import logo from './logo.svg';
import './App.css';
import './styles/SignUp.css'

import { User } from './Components/User.jsx';

class SignUp extends Component {
    constructor(props) {
    super(props);
    this.state={
       userName :'',
       email: '', 
       password :'',
       birthdate: '',
       sexe:''
    };
}

handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  RegisterUser = (event) =>{
    event.preventDefault();
    console.log('New User is added' + this.state.userName + this.state.email +
     this.state.sexe + this.state.birthdate)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fill in Your Profile</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className="form-register">
        <form onSubmit={this.RegisterUser}>
        <div className="form-row">
        <label>
        <span>Name</span>
        <input type="text" name="userName" value={this.state.userName}  onChange={(event) => this.handleUserInput(event)}/>
        </label>
        </div>

        <div className="form-row">
        <label>
        <span>Email</span>
        <input type="text" name="email" onChange={(event) => this.handleUserInput(event)}/>
        </label>
        </div>

        <div className="form-row">
        <label>
        <span>password</span>
        <input type="password" name="password" onChange={(event) => this.handleUserInput(event)} required  minLength="8" maxLength="15"/>
        </label>
        </div>

        <div className="form-row">
        <label>
        <span>Birthdate</span>
        <input type="date" name="birthdate" onChange={(event) => this.handleUserInput(event)} />
        </label>
        </div>


        <div className="form-row">
        <label className="form-radio">
        <span>Sexe</span>
        F: <input type="radio" name="sexe" value="Female" onChange={(event) => 
    this.setState({sexe: 'F'})}/>
        M: <input type="radio" name="sexe" value="Male" onChange={(event) => 
    this.setState({sexe: 'M'})}/>
        </label>
        </div>
        <div className="form-row">
          <button type="submit">Register</button>
        </div>

        </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
