import React from 'react';

import { Link } from 'react-router-dom';
import styles from '../headers/Redes.module.css' ;
import Iconos from '../subcomponents/Iconos';

function Redes() {
  return (
    <div className={styles.container}>
        <nav className="navbar navbar-expand-lg ">
         <div className="container-fluid">
              <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Iconos />
                  </a>
                </li>
              </ul>
                  <span className="navbar-text">
                        <ul className="nav col-12col-md-auto mb-2 mb-md-0"> 
                          <li> <Link to={"/register"}  className={styles.register}>Register</Link></li>
                          <li><Link to={"/login"} className={styles.login}>/ Login</Link></li>
                        </ul> 
                  </span>
             </div>
          </div>
      </nav>
 </div>
     
)
} ;

export default Redes ; 