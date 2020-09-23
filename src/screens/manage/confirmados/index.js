import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../../layouts/manage';
import {listConfirmados} from '../../../actions/confirmedActions';

const Confirmados = ({confirmados, listConfirmados}) =>{
    useEffect(()=>{
        listConfirmados();
    }, []);
    
    console.log(confirmados);

    return (
    <Layout>
        <div className="row">
            <div className="col">
                <h2>Confirmados</h2>
            </div>
            <div className="col text-right align-self-bottom pt-2">
                <Link to="/manage/confirmados/create" className="btn btn-primary">
                    Edit
                </Link>
            </div>
        </div>
        
        <div>
            {confirmados && confirmados.length ?
                confirmados.map((confirmado, index)=>{
                    return(
                    <div key={index} className="pb-1 pt-1 pl-3 pr-3 d-flex flex-row justify-content-between w-75 mx-auto shadow-sm p-3 mb-5 bg-gradient-success rounded">
                        {/* <div className="pr-3"><img src="https://via.placeholder.com/50" alt="identification"></img></div> */}
                        <div className="align-self-center">
                            <span className="text-primary clearfix">{confirmado.name}</span>
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

    </Layout>
  );
}

const mapStateToProps = (state) =>{
    return {confirmados: state.confirmado.confirmados}
}

export default connect(mapStateToProps, {listConfirmados})(Confirmados)