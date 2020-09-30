import React, { useState } from 'react';
import Footer from '../../components/footer';
import NavHome from '../../components/navbar/home';
import SignInModal from '../../components/modal/signInModal';

const Home = () =>{
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);

  return (
    <React.Fragment>
      <NavHome>
      {show ? 
        <div className="back-drop">
          <SignInModal show={show} close={closeModalHandler} />
        </div> 
      : null}
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="hero-title">Lorem Ipsum</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="hero-text center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maxime, quas earum incidunt ducimus consequuntur eum aspernatur excepturi dolorem!
                    Vitae voluptate recusandae officia libero cum labore ipsum odit iusto vel nobis!</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button onClick={()=>setShow(true)} className="hero-button">Confirmar Presença</button>
              </div>
            </div>
          </div>
        </section>

      </NavHome>
      <Footer/>
    </React.Fragment>
  )
}

export default Home;