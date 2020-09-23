import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../actions/accountActions';
import './modal.css';

const Modal = ({ show, close, account, signIn }) =>{
    const submitHander = (e) =>{
        e.preventDefault();

        const accessCode = document.getElementById("accessCode").value;
    
        signIn({accessCode});
    }

    if(account){
        close()
        //return <Redirect to="/manage/confirmados/view"/>
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
                        <div>
                            <div className="">
                                <label>Código de Acesso</label>
                                <input 
                                id="accessCode" 
                                name="accessCode" 
                                type="text" 
                                className="form-control"
                                required="required"
                                ></input>
                            </div>
                        </div>

                        <div>
                            <div className="botoes">
                                <button className="btn-signIn btn-entrar">Entrar</button>
                                <button onClick={close} className="btn-signIn btn-cancel">Close</button>
                            </div>
                        </div>

                    </form>
                </div>
                {/* <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">Close</button>
                </div> */}
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps, {signIn})(Modal);