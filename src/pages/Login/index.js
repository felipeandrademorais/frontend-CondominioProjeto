import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userlogo from '../../assets/user.svg';
import './styles.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="userlogo">
          <img src={userlogo} alt="UserLogo"/>
        </div>
        <h1>Login</h1>
        <form>
          <input 
            type="text"
            placeholder="E-mail" 
          />
          <input 
            type="password"
            placeholder="Password" 
          />
          <Link to="/medicoes"><button>LOGIN</button></Link>
        </form>
      </div>
    );
  }
}
