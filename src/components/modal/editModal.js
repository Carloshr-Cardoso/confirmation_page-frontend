import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editConfirmado, clearConfirmado } from '../../actions/confirmedActions';

const EditModal = ({ id, show, close, account, editConfirmado, clearConfirmado, confirmado }) =>{
  if(!account){
    return <Redirect to="/" />
  }
  
  const submitHander = (e) =>{
    e.preventDefault();
    const name = document.getElementById("newName").value;
    editConfirmado({name}, id)
  }
  if (confirmado){
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
        <p> { `Editar Nome do Acompanhante`}</p>
        <span onClick={close} className="close-modal-btn">X</span>
      </div>
      <div className="modal-content">
        <div className="modal-body input-acessCode">
          <div className="row">
            <div className="col lg-10 teste">
              <input id="newName" className="content-form-input" placeholder="Nome e Sobrenome"></input>
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

export default connect(mapStateToProps, {editConfirmado, clearConfirmado})(EditModal);