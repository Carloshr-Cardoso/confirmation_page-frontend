import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../../../components/modal/modal'

//Video em 33:36

const LayoutNav = ({ children }) =>{
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);

    // const signInHandler = (e) =>{
    //     e.preventDefault();
    //     console.log("Sign In Solicitation");

    // }

    return (
        <div className="layout">
            <nav className="nav justify-content-end navBaby text-light bg-baby-green">
                <div className="container">
                    <div>
                        <svg onClick={()=>setShow(true)} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-circle action-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                        </svg>
                        <button className="btn btn-clear btn-sign-in" onClick={()=>setShow(true)}>Confirme Sua Presença</button>
                    </div>
                </div>
            </nav>

            {show ? 
                <div className="back-drop">
                    <Modal show={show} close={closeModalHandler} />
                </div> 
            : null}

            <div>{children}</div>

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
    )
    
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps)(LayoutNav);