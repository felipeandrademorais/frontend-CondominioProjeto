import React, { Component } from 'react';
import Usercircle from '../../assets/user-circle.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>LogoEmpresa</h1>
        <h1>NomeEmpresa</h1>
        <button><img src={Usercircle} alt="usercircle" /></button>
      </div>
    );
  }
}
