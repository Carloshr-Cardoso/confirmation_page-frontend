import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from './signUpActions';


const createAccessCode = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const SignUp = (props) =>{

  const { signUp, account } = props;
  const length = Math.floor(Math.random() * 4) + 6;  // returns a random integer from 6 to 10
  const [AccessCode, setAccessCode] = useState(createAccessCode(length));
  
  const updateAcessCode = () =>{
    setAccessCode(createAccessCode(length));
  }

  const submitHander = (e) =>{
    e.preventDefault();

    /*const formData = new FormData(document.getElementById("signUpForm"));
    const data = Object.fromEntries(formData);*/
    
    const data = {
      name: `${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`,
      invitations: document.getElementById("invitations").value,
      accessCode: document.getElementById("accessCode").value
    };
    console.log("*** SignUp.submitHander.data", data)
    
    signUp(data);
    
    
  };

  if(account){
    return <Redirect to="/manage/confirmados" />
  }

  return (
    <div className="container h-100 pt-5">
      <div className="w-75 mx-auto h-100">
      <h1>Sign Up</h1>
        <form id="signUpForm" onSubmit={submitHander}>
          <div className="row">
            
            <div className="col-md-5">
              <label>First Name</label>
              <input id="firstName" name="firstName" type="text" className="form-control" placeholder="First Name"></input>
            </div>

            <div className="col-md-5">
              <label>Last Name</label>
              <input id="lastName" name="lastName" type="text" className="form-control" placeholder="Last Name"></input>
            </div>

            <div className="col-md-2">
              <label>Convidados</label>
              <input id="invitations" name="invitations" type="number" min="1" max="10" className="form-control"></input>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-3">
              <label>Código de Acesso</label>
              <input id="accessCode" name="accessCode" type="text" className="form-control" value={AccessCode} readOnly="readOnly"></input>
            </div>
            <div className="col-md-3 mt-4">
              <div onClick={updateAcessCode} className="btn btn-round btn-sm">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <button onClick={submitHander} className="btn btn-primary btn-round">Criar</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {account: state.signUp.account}
}

export default connect(mapStateToProps, {signUp})(SignUp)
