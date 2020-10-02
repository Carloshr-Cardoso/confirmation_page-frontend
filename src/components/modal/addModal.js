import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createConfirmado, clearConfirmado } from '../../actions/confirmedActions';

const AddModal = ({ show, close, account, confirmado, createConfirmado, clearConfirmado }) =>{
  if(!account){
    return <Redirect to="/" />
  }
  
  const submitHander = (e) =>{
    e.preventDefault();
    const name = document.getElementById("nameAcompanhante").value;
    createConfirmado({name});
//    console.log("***EditModalConfirmation.Solicitação.NewName", name);
  }

  if (confirmado){
    //console.log("*** Confirmado Criado =>", confirmado);
    alert(`*** Acompanhante ${confirmado.nome} Criado com Sucesso`);
    clearConfirmado();
    return <Redirect to="/manage/confirmados/list" />
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
              <input id="nameAcompanhante" className="content-form-input" placeholder="Nome e Sobrenome"></input>
            </div>
          </div>
            
            <div>
              <div className="modal-buttons">
                  <button onClick={submitHander} className="btn-signIn btn-entrar">Confirmar</button>
                  <button onClick={close} className="btn-signIn btn-cancel">Fechar</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
    return {
      account: state.account.account,
      confirmado: state.confirmado.confirmado
    }
  }

export default connect(mapStateToProps, {createConfirmado, clearConfirmado})(AddModal);