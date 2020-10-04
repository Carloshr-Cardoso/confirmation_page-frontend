import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
  return(
    <section className="footer">
      <div className="container" id="contato">
        <div className="row">
          <div className="col lg-5">
            <ul>
              <li className="list-group-item"> <Link to="/admin/list"> Admin List| </Link> </li>
              <li className="list-group-item"> <Link to="/sign-up"> Sign Up| </Link> </li>
              <li className="list-group-item"> <Link to="/manage/confirmados/list"> View Confirmados| </Link> </li>
              <li className="list-group-item"> <Link to="/manage/confirmados/create"> Create Confirmado| </Link> </li>
              <li className="list-group-item"> <Link to="/manage/confirmados/edit"> Edit Confirmado| </Link> </li>
              <li className="list-group-item"> <Link to="/manage/confirmados"> Confirmados </Link> </li>
            </ul>
          </div>
          <div className="col lg-5">
            <p className="copy">
              Todos os direitos reservados &copy; Carlos Cardoso
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;