import React, { Component } from 'react';

import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Table from '../../components/Tables';

import './styles.css';

export default class Condominios extends Component {
  render() {
    return (
      
      <div className="dashboard">
        <Header />
        <div className="content">
          <Aside />
          <Table />
        </div>
      </div>
    );
  }
}
