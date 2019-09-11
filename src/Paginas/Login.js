import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
import '../css/Login.css';
export default class Login extends Component{
  state = {
    email: '',            
}
  handleSubmit = e =>{
    e.preventDefault();    
    const {email} = this.state;

    if(!email.length) return;

    localStorage.setItem('@fatura:email', email);

    this.props.history.push('/DashBoard');
};

handleImputChange = e =>{
  this.setState({email: e.target.value });
};
    render(){ 
      const isValidEmail = this.state.email.length> 3;
    return (           
          <div className="container">
          <MDBCard>
          <MDBCardHeader color="primary-color text-center">Login</MDBCardHeader>
            <MDBCardBody>
              <form onSubmit={this.handleSubmit}>                
                <div className="grey-text">                  
                  <MDBInput
                    value={this.state.email}
                    onChange={this.handleImputChange}
                    label="E-mail"
                    icon="envelope"
                    group
                    type="email"
                    required                    
                    error="wrong"
                    success="right"                    
                    name="email"
                    //validations={[required, email]}
                  />                 
                  <MDBInput
                    label="Senha"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="primary" type="submit">                    
                    Entrar
                  </MDBBtn>
                  <MDBBtn color="warning" type="submit">
                    Esqueci minha senha
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
          </div>        
        
  );
    }
}