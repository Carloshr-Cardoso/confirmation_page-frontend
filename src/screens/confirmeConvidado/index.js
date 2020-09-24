import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../layouts/manage';
import {Switch} from 'antd';
import {createConfirmado, listConfirmados} from '../../actions/confirmedActions';
import { Link } from 'react-router-dom';

const ConfirmeConvidado = ({ account, confirmados, createConfirmado, listConfirmados, confirmado }) =>{
    useEffect(()=>{
        listConfirmados();
    }, []);

    //console.log(confirmados);
    let firstName = '';
    let lastName = '';
    let isAccountConfirmed = false;

    if (account){
        if(confirmados && confirmados.length){
            confirmados.map((confirmado, index)=>{
                //console.log(`Verificando se ${confirmado.name} == ${account.name}:`)
                if (confirmado.name === account.name){
                    isAccountConfirmed = true;
                    //console.log("SIM");
                }
            })
        }
        
        const name = account.name.split(" ");
        firstName = name[0];
        lastName = name[1];    
    }

    const [toggle, setToggle] = useState(isAccountConfirmed);
    const toggler = () => {toggle ? setToggle(false) : setToggle(true)};
    // const [showButton, setShowButton] = useState(false);
    
    const saveSubmit = () =>{
        // createConfirmado({name: `${firstName} ${lastName}`})
        createConfirmado({name: account.name});
    }

    // if (confirmado){
    //     alert(`${confirmado.name} Confirmado com Sucesso`);
    // }
    return (
        <Layout>
                    {/* <h1>Página de Confirmação do Convidado</h1> */}
                    <p className="content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore 
                         magna aliqua. Ut enim ad minim veniam, quis nostrud 
                         exercitation ullamco laboris nisi ut aliquip ex ea 
                         commodo consequat. Duis aute irure dolor in reprehenderit 
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                         Excepteur sint occaecat cupidatat non proident, 
                         sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <form>
                        <div className="content-form">
                            {/* Primeiro Nome */}
                            <div className="form-element">
                                <label>Nome</label>
                                <input
                                    name="firstName" 
                                    type="text" 
                                    className="form-control text-center form-input" 
                                    value={firstName}
                                    placeholder={firstName || 'First Name'}
                                    readOnly="readOnly"
                                    // disabled="disabled"
                                    ></input>
                            </div>
                    
                            {/* Segundo Nome */}
                            <div className="form-element">
                                <label>&nbsp;</label>
                                <input 
                                    name="lastName"
                                    type="text" 
                                    className="form-control text-center form-input" 
                                    value={lastName}
                                    placeholder={lastName || 'Last Name'}
                                    readOnly="readOnly"
                                    // disabled="disabled"
                                    ></input>
                            </div>

                            <div>
                                <label className="form-toggle">Confirmado</label>
                                <div className="form-toggle">
                                    <Switch onClick={toggler}/>
                                </div>
                            </div>
                       </div>
                        {toggle 
                            ?
                            <div className="content-container">
                                <div onClick={saveSubmit} type="submit" className="btn btn-warning btn-round btn-save"> Salvar </div>
                            </div>
                            :
                            null
                        }
                    </form>

                    {isAccountConfirmed 
                        ? 
                        <div className="content-container">
                            <Link to="/manage/confirmados/view">
                                <div className="btn btn-warning btn-round btn-manage"> Gerenciar Acompanhantes </div>
                            </Link>
                        </div>
                        :
                        null
                    }
                    

        </Layout>
    );
}

const mapStateToProps = (state) =>{
    return {
        account: state.account.account,
        confirmado: state.confirmado.confirmado,
        confirmados: state.confirmado.confirmados
    }
}

export default connect(mapStateToProps,{createConfirmado, listConfirmados})(ConfirmeConvidado);