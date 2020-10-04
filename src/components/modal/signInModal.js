import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../actions/accountActions';

const SignInModal = ({ show, close, account, signIn }) =>{
  const submitHander = (e) =>{
    e.preventDefault();
    const accessCode = document.getElementById("accessCode").value;
    signIn({accessCode});
  }

  if(account && account.role === 1){
    return <Redirect to="/manage" />
  }
  if (account && account.role === 2){
    return <Redirect to="/admin/list" />
  }
    
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
          <p>Entrar com Código de Acesso</p>
          <span onClick={close} className="close-modal-btn">X</span>
      </div>
      <div className="modal-content">
        <div className="modal-body input-acessCode">
          <h4>Sign In</h4>
          <form onSubmit={submitHander}>
            <div className="modal-form">
              <div>
                  <label>Código de Acesso</label>
              </div>
              <div>
                  <input className="modal-form-input" id="accessCode" required="required" ></input>
              </div>
            </div>
            <div>
              <div className="modal-buttons">
                  <button className="btn-signIn btn-entrar">Entrar</button>
                  <button onClick={close} className="btn-signIn btn-cancel">Fechar</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps, {signIn})(SignInModal);