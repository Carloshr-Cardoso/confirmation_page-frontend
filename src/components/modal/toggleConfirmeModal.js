import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editConfirmado } from '../../actions/accountActions';

const ToggleConfirmeModal = ({ show, close, account, editConfirmado }) =>{
    
  const submitHander = (e) =>{
    e.preventDefault();
    if (account.confirmado){
      const confirmado = false;
      editConfirmado({confirmado});
      close();
      return <Redirect to="/manage" />
      
    }else{
      const confirmado = true;
      editConfirmado({confirmado});
      close();
      return <Redirect to="/manage" />
    }
    
  }

  if (account){
    return (
      <div className="modal-wrapper"
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        <div className="modal-header">
          {account.confirmado ?
            <p>Remover Confirmação de Presença?</p>
            : <p>Confirmar Sua Presença?</p>
          }
          <span onClick={close} className="close-modal-btn">X</span>
        </div>
        <div className="modal-content">
          <div className="modal-body input-acessCode">
            {account.confirmado ?
              <h5>Ao Confirmar, você apagará Todos os acompanhantes cadastrados!</h5>
              : <h5>Deseja Confirmar Sua Presença?</h5>
            }
              <div className="modal-buttons">
                <button onClick={submitHander} className="btn-signIn btn-entrar">Confirmar</button>
                <button onClick={close} className="btn-signIn btn-cancel">Cancelar</button>
              </div>

          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps, {editConfirmado})(ToggleConfirmeModal);