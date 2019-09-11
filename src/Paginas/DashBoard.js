import React, {Component} from "react";

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
  import { BrowserRouter as Router } from 'react-router-dom';
import '../css/DashBoard.css';

export default class DashBoard extends Component{  
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
    render(){ 
    return (
      <Router>
      <MDBNavbar color="primary-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Gestão de faturas</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active  nav caret>              
              <MDBNavLink to="#!">Início</MDBNavLink>
            </MDBNavItem>    
            <MDBNavItem>
            <MDBDropdown>              
                <MDBDropdownToggle nav caret>                
                <MDBIcon icon="clipboard"/>
                  <div className="d-none d-md-inline Icones">Lançar faturas</div>                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">                
                  <MDBDropdownItem href="#!">Eletricidade</MDBDropdownItem>                                  
                  <MDBDropdownItem href="#!">Água</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Gás</MDBDropdownItem>                                  
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavItem>
            
            <MDBNavItem>
            <MDBDropdown>              
                <MDBDropdownToggle nav caret>                
                <MDBIcon icon="cog"/>
                  <div className="d-none d-md-inline Icones">Cadastros</div>                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">                
                  <MDBDropdownItem href="#!">Condomínios</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Proprietários</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Funcionários</MDBDropdownItem>                  
                  <MDBDropdownItem href="#!">Usuários</MDBDropdownItem>                  
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
            <MDBDropdown>              
                <MDBDropdownToggle nav caret>                
                <MDBIcon icon="chart-line"/>
                  <div className="d-none d-md-inline Icones">Relátorios</div>                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">                
                  <MDBDropdownItem href="#!">Faturas</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Relação de proprietários</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Relação de funcionários</MDBDropdownItem>                  
                  <MDBDropdownItem href="#!">Relação de Usuários</MDBDropdownItem>                  
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>              
                <MDBDropdownToggle nav caret>                
                <MDBIcon icon="cog"/>
                  <div className="d-none d-md-inline Icones">Configurações</div>                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">                
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>            
            <MDBNavItem>              
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />                                  
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
  );
    }
}