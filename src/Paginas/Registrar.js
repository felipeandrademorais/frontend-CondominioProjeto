import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';

export default class Registrar extends Component{
    render(){ 
    return (
        <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
            <MDBCardHeader color="primary-color text-center">Criar novo cadastro</MDBCardHeader>
              <MDBCardBody>
                <form>                  
                  <div className="grey-text">
                    <MDBInput
                      label="Nom completo"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="E-mail"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirmar e-mail"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
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
                    <MDBBtn color="cyan" type="submit">
                      Cadastrar
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
    }
}