import React, { Component } from 'react';

import listIco from "../../assets/list-alt.svg";
import chartIco from "../../assets/chart-line.svg";
import Tools from "../../assets/tools.svg";
import Exit from "../../assets/exit.svg";

export default class Aside extends Component {
  render() {
    return (
      <div className="aside">
        <ul>
          <li className="active"><img src={listIco} /><a href="">Condominios</a></li>
          <li><img src={chartIco} /><a href="">Medições</a></li>
          <li><img src={Tools} /><a href="">Configurações</a></li>
          <li><img src={Exit} /><a href="">Sair</a></li>
        </ul>
      </div>
    );
  }
}
