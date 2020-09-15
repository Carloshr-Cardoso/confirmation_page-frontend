import React from 'react';
import { connect } from 'react-redux';
import { signIn } from './signInActions';

const SignIn = (props) =>{
  const { account, signIn } = props;

  const submitHander = (e) =>{
    e.preventDefault();

    signIn({accessCode: 'a14asad'});
  }

  console.log("***** SignIn.account", account)

  return (
    <div className="container h-100 pt-5">
      <div className="w-25 mx-auto h-100">
        <h1>Sign In</h1>
          <form onSubmit={submitHander}>
            <div className="row">
              <div className="col-md-12">
                <label>Código de Acesso</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mt-2">
                <button className="btn btn-primary btn-round">Entrar</button>
              </div>
            </div>

          </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {account: state.signIn.account}
}

export default connect(mapStateToProps, {signIn})(SignIn)