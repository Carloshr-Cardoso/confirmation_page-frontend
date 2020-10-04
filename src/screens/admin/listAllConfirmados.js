import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import NavManage from '../../components/navbar/manage'
import Footer from '../../components/footer'
import { Redirect, Link } from 'react-router-dom';
import { listConvidados } from '../../actions/adminActions';

const ListAllConfirmados = ({ account, listConvidados, convidados }) =>{
  useEffect(()=>{
    listConvidados();
  }, []);

  
  if (!account){
    return <Redirect to="/" />
  }
  if (account.role === 1){
    return <Redirect to="/manage" />
  }
  
  console.log(convidados);
  

  return (
    <React.Fragment>
      <NavManage header="Lista de Confirmados">
      <div className="row">
            <div className="col">
                <h2>Lista de Convidados</h2>
            </div>
            <div className="col text-right align-self-bottom pt-2">
                <Link to="/sign-up" className="btn btn-primary">
                    Add
                </Link>
            </div>
        </div>
        
        <div>
            {convidados && convidados.length ?
                convidados.map((convidado, index)=>{
                    return(
                    <div key={index} className="">
                        <div className="align-self-center">
                            <span className="text-primary clearfix">{convidado.name}</span>
                        </div>
                        {/* <div className="ml-auto p-2 clearfix">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div> */}
                    </div>
                    )
                }) : null
            }
        </div>
      </NavManage>
      <Footer/>
    </React.Fragment>
  )
}

const MapStateToProps = (state) =>{
  return {
    account: state.account.account,
    convidados: state.admin.convidados
  }
}

export default connect(MapStateToProps, {listConvidados})(ListAllConfirmados);