import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteConfirmed, clearDeleteConfirmed } from '../../actions/confirmedActions'

const DeleteModal = ({ id, show, close, account, deleteConfirmed, clearDeleteConfirmed, isDeleted }) =>{

  const submitHander = (e) =>{
    e.preventDefault();
    deleteConfirmed(id);
    // console.log("Acompanhante Apagado")
    
  }

  if(isDeleted){
    // console.log("Acompanhante DELETADO")
    clearDeleteConfirmed();
    alert ("Acompanhante Excluido com Sucesso")
    return <Redirect to="/manage/confirmados/list" />
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
          <p>Remover Acompanhante?</p>
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
    return {
      account: state.account.account,
      isDeleted: state.confirmado.isDeleted
    }
  }

export default connect(mapStateToProps, {deleteConfirmed, clearDeleteConfirmed})(DeleteModal);