import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/manage';

const Confirmados = () =>{
  return (
    <Layout>
        <div className="row">
            <div className="col">
                <h2>Confirmados</h2>
            </div>
            <div className="col text-right align-self-bottom pt-2">
                <Link to="/manage/confirmados/create" className="btn btn-primary">
                    Add
                </Link>
            </div>
        </div>
        
        <div className="pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between w-75 mx-auto">
            <div className="pr-3"><img src="https://via.placeholder.com/100" alt="Photo"></img></div>
            <div className="align-self-center">
                <span className="text-primary clearfix">Carlos Henrique Ribeiro Cardoso</span>
            </div>
            <div className="ml-auto p-2 clearfix">
                <span>Edit</span>
                <span>Delete</span>
            </div>

        </div>

    </Layout>
  );
}

export default Confirmados