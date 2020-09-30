import React from 'react';
import { connect } from 'react-redux';


const DeleteModal = ({ id, show, close, account }) =>{

  const submitHander = (e) =>{
    e.preventDefault();
    console.log("Acompanhante Apagado")
    
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
          <p>Remover Acompanhante {id}?</p>
          <span onClick={close} className="close-modal-btn">X</span>
        </div>
        <div className="modal-content">
          <div className="modal-body input-acessCode">
            <h5>Ao Confirmar, você apagará este acompanhante da lista!</h5>
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

export default connect(mapStateToProps)(DeleteModal);