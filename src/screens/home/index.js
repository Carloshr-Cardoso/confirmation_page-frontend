import React from 'react';
import { Link } from 'react-router-dom';
import LayoutNav from '../layouts/home';

const Home = () =>{
    return (
        <LayoutNav>
            <section className="hero">
                {/* <div>
                    <h1 className="hero-title">Lorem Ipsum</h1>
                </div>
                <div>
                    <p className="hero-text center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maxime, quas earum incidunt ducimus consequuntur eum aspernatur excepturi dolorem!
                    Vitae voluptate recusandae officia libero cum labore ipsum odit iusto vel nobis!</p>
                </div> */}
                
                <Link to="/manage">
                    <div className="absolute">
                        <div className="hero-button">
                            <div className="hero-button-icon">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </div>
                            
                                <div className="hero-button-text">
                                    Confirme Sua Presença
                                </div>
                            
                            <div className="hero-button-icon">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </LayoutNav>
    )
}

export default Home;