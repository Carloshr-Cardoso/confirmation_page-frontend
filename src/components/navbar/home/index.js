import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignInModal from '../../modal/signInModal'

const NavHome = ({ children }) =>{
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  return (
    <div>
      <section className="navbar">
        <div className="container">
          <nav>
            <div className="row">
              <div className="col lg-9">
                <ul>
                  <li className="menu-link">
                  <li onClick={()=>setShow(true)} className="menu-link">
                    <div className="list-link">
                      Confirme Sua Presença
                    </div>
                  </li>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>

      {show ? 
        <div className="back-drop">
          <SignInModal show={show} close={closeModalHandler} />
        </div> 
      : null}

      <div>{children}</div>

    </div>
  )
    
};

const mapStateToProps = (state) =>{
    return {account: state.account.account}
  }

export default connect(mapStateToProps)(NavHome);