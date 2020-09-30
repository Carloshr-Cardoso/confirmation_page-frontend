import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOut } from '../../../actions/accountActions';

const NavManage = ({ children, account, signOut, header="" }) =>{
  if(!account) return <Redirect to="/"/>;
  
  const signOutHandler = (e) =>{
    e.preventDefault();
    signOut();
  }

  return (
    <div>
      <section className="navbar">
        <div className="container">
          <nav>
            <div className="row">
              <div className="col lg-33">
                <ul>
                  <li className="menu-link list-link left">Back</li>
                </ul>
              </div>

              <div className="col lg-33">
                <ul>
                  <li className="menu-link list-link center">{header}</li>
                </ul>
              </div>
              
              <div className="col lg-33">
                <ul>
                  <li onClick={signOutHandler} className="menu-link list-link right">Sair</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section className="main-content">
        <div className="content-container">
          <div>{children}</div>
        </div>
      </section>

    </div>
  )
    
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps, {signOut})(NavManage);