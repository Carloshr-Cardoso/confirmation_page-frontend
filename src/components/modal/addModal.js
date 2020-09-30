import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AddModal = ({ show, close, account }) =>{
  if(!account){
    return <Redirect to="/" />
  }
  
  const submitHander = (e) =>{
    e.preventDefault();
    //const accessCode = document.getElementById("accessCode").value;
    console.log("***EditModalConfirmation.Solicitação.NewName")
  }
  
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
          <p>Adicionar Acompanhante</p>
          <span onClick={close} className="close-modal-btn">X</span>
      </div>
      <div className="modal-content">
        <div className="modal-body input-acessCode">
          <div className="row">
            <div className="col lg-10 teste">
              <input className="content-form-input" placeholder="Nome e Sobrenome"></input>
            </div>
          </div>
            
            <div>
              <div className="modal-buttons">
                  <button className="btn-signIn btn-entrar">Confirmar</button>
                  <button onClick={close} className="btn-signIn btn-cancel">Fechar</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps)(AddModal);