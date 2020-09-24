import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../../../layouts/manage';
import { Link } from 'react-router-dom';
import {listConfirmados} from '../../../../actions/confirmedActions';

const Viewer = ({ confirmados, listConfirmados }) =>{
  useEffect(()=>{
    listConfirmados();
  }, []);

  return (
    <Layout>
        <div className="confirmed-list">
          <form>
            { confirmados && confirmados.length ?
              confirmados.map((confirmado, index)=>{
                const name = confirmado.name.split(" ");
                const firstName = name[0];
                const lastName = name[1];
                return (
                <div className="confirmed-items" key={index}>
                  {/* Primeiro Nome */}
                  <div className="col-md-5">
                    <input
                      name="firstName" 
                      type="text" 
                      className="form-control text-center" 
                      value={firstName}
                      placeholder={firstName || 'First Name'}
                      readOnly={true}
                    ></input>
                  </div>
                
                  {/* Segundo Nome */}
                  <div className="col-md-5">
                    <input 
                      name="lastName"
                      type="text" 
                      className="form-control text-center" 
                      value={lastName}
                      placeholder={lastName || 'Last Name'}
                      readOnly={true}
                    ></input>
                  </div>
              </div>)
              }) :
              
              null

            }

            {/* Submit Button */}
            <div>
              <Link to="/manage/confirmados/create">
                <button type="button" className="btn btn-warning btn-round btn-manage"> Editar </button>
              </Link>
            </div>
          </form>
        </div>
    </Layout>
  );
}

const mapStateToProps = (state) =>{
  return {
    account: state.account.account, 
    confirmados: state.confirmado.confirmados
  }
}
export default connect(mapStateToProps, {listConfirmados})(Viewer)
