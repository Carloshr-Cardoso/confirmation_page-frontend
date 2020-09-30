import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NavManage from '../../components/navbar/manage';
import { listConfirmados } from '../../actions/confirmedActions';
import Footer from '../../components/footer';
import ToggleConfirmeModal from '../../components/modal/toggleConfirmeModal'
import {Switch} from 'antd';
import { Link, Redirect } from 'react-router-dom';

const ConfirmeConvidado = ({ account, listConfirmados }) =>{
  useEffect(()=>{
    listConfirmados();
  }, []);
  
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  
  if(!account){
    return <Redirect to="/" />
  }
  const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore 
  magna aliqua. Ut enim ad minim veniam, quis nostrud 
  exercitation ullamco laboris nisi ut aliquip ex ea 
  commodo consequat. Duis aute irure dolor in reprehenderit 
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore 
  magna aliqua. Ut enim ad minim veniam, quis nostrud 
  exercitation ullamco laboris nisi ut aliquip ex ea 
  commodo consequat. Duis aute irure dolor in reprehenderit 
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  `

  let firstName = '';
  let lastName = '';

  if (account){
      
    const name = account.name.split(" ");
    firstName = name[0];
    lastName = name[1];    
  }

  // const [toggle, setToggle] = useState(isAccountConfirmed);
  // const toggler = () => {toggle ? setToggle(false) : setToggle(true)};
  

  return (
    <React.Fragment>
      {show ? 
        <div className="back-drop">
          <ToggleConfirmeModal show={show} close={closeModalHandler} />
        </div> 
      : null}
      <NavManage header={account ? account.name : null}>
        <p className="content-text">
            {paragraph}
        </p>

        <div className="list-names">
          <div className="row">
            <label>Nome</label>
          </div>

          <div className="row">
            <div className="col lg-8 teste">
              <input className="content-form-input" placeholder={account.name} readOnly={true}></input>
            </div>
            <div className="col lg-2 switch-button">
              <label>Confirmado</label>

              {account && account.confirmado ?
                <Switch onClick={()=>setShow(true)} className="positive" checked={true}/>
              : <Switch onClick={()=>setShow(true)} className="negative" checked={false}/>
              }
            </div>
          </div>


        </div>

            
            {account && account.confirmado ?
              <Link to="/manage/confirmados/list">
                <div className="content-button">Gerenciar Acompanhantes</div>
              </Link>
            : null
            }       

      </NavManage>
      <Footer/>
    </React.Fragment>
  );
}

const mapStateToProps = (state) =>{
  return {
    account: state.account.account,
    confirmado: state.confirmado.confirmado,
    confirmados: state.confirmado.confirmados
  }
}

export default connect(mapStateToProps,{listConfirmados})(ConfirmeConvidado);