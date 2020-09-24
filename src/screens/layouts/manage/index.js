import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import {signOut} from '../../../actions/accountActions'


const Layout = ({ children, signOut, account }) =>{
    if (!account) {
        return <Redirect to="/" />
    }
    
    const signOutHandler = (e) =>{
        e.preventDefault();
        signOut();

    }

    return(
        <div className="layout">
            <nav className="nav justify-content-end navBaby text-light bg-baby-green">
                <div className="container nav-items">
                    <div>
                        <svg onClick={()=>{return <Redirect to="/" />}} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                        <button className="btn btn-clear btn-sign-in" onClick={()=>{return <Redirect to="/" />}}>Página Inicial</button>
                    </div>
                    <div>
                        <p>{account.name}</p>
                    </div>
                    <div>
                        <svg onClick={signOutHandler} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-circle action-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                        </svg>
                        <button className="btn btn-clear btn-sign-in" onClick={signOutHandler}>Sair</button>
                    </div>
                </div>
            </nav>
        
            <div className="main-content">
                <section className="content-container">
                    <div className="content">
                        {children}
                    </div>
                </section>
            </div>

            <section className="footer">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item"> <Link to="/sign-in"> Sign In </Link> </li>
                    <li className="list-group-item"> <Link to="/sign-up"> Sign Up </Link> </li>
                    <li className="list-group-item"> <Link to="/manage/confirmados/create"> Create Confirmado </Link> </li>
                    <li className="list-group-item"> <Link to="/manage/confirmados/edit"> Edit Confirmado </Link> </li>
                    <li className="list-group-item"> <Link to="/manage/confirmados"> Confirmados </Link> </li>
                </ul>
            </section>

    </div>

    );
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps, {signOut})(Layout);