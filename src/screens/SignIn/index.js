import React from 'react';

const SignIn = () =>{
  return (
    <div className="container h-100 pt-5">
      <div className="w-25 mx-auto h-100">
        <h1>Sign In</h1>
          <form>
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

export default SignIn