import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import NavManage from '../../../../components/navbar/manage';
import {listConfirmados} from '../../../../actions/confirmedActions';
import Footer from '../../../../components/footer';

const List = ({ account, confirmados, listConfirmados }) =>{
  useEffect(()=>{
    listConfirmados();
  }, []);

  if(!account || !account.confirmado) {
    return <Redirect to="/manage" />
  }

  let firstName;
  let lastName;
  const name = account.name.split(" ");
  firstName = name[0];
  lastName = name[1];

  return (
    <React.Fragment>
      <NavManage header="Seus Acompanhantes">
        <div className="list-names">
          <div className="row">
            <label>Nome</label>
          </div>

          <div className="row">
            <div className="col lg-10 teste">
              <input className="content-form-input" placeholder={account.name} disabled={true} readOnly={true}></input>
            </div>
          </div>

          { confirmados && confirmados.length ?
            confirmados.map((confirmado, index)=>{
              return(
                <div className="row" key={index}>
                  <div className="col lg-10 teste">
                    <input id={confirmado.id} className="content-form-input" placeholder={confirmado.name} readOnly={true}></input>
                  </div>
                </div>
              )
            })
            : null
          }

          <Link to="/manage/confirmados/create">
            <button type="button" className="btn-manage"> Editar </button>
          </Link>
        
        </div>
      </NavManage>
      <Footer/>
    </React.Fragment>
  );
}

const mapStateToProps = (state) =>{
  return {
    account: state.account.account, 
    confirmados: state.confirmado.confirmados
  }
}
export default connect(mapStateToProps, {listConfirmados})(List)
