import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {signOut} from '../../../actions/accountActions'


const Layout = ({ children, signOut, account }) =>{
    if (!account) {
        return <Redirect to="/sign-in" />
    }
    
    const signOutHandler = (e) =>{
        e.preventDefault();
        signOut();

    }

    return(
        <div className="layout">
            <nav className="navbar navbar-expand-lg bg-primary text-light">
                <div className="container d-flex w-100 justify-content-between">
                    <div>
                        <span>Back</span>
                    </div>
                    <div className="text-center">
                        <strong>Confirmados</strong>
                    </div>
                    <div>
                        <button className="btn btn-clear" onClick={signOutHandler}>Exit</button>
                    </div>
                </div>
            </nav>

    <div className="container">{children}</div>

        </div>
    );
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps, {signOut})(Layout);