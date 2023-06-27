import React from 'react';
import styles from './Food.module.css'
import { Link } from 'react-router-dom';
import Search from '../subcomponents/Search';


function Food () {
  return (
      <div className={styles.food}>
            <div className="col-md-3 mb-2 mb-md-0 ms-5">
                  <a href="#" className="d-inline-flex link-body-emphasis text-decoration-none">
                  <img src="logo/food-logo.png" alt="food-logo" width="250"/>
                  </a>
             </div> 
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>  <Link className={styles.home} to={"/"}>Home</Link></li>
                <li> <Link className={styles.features} to={"/features"}>Features</Link></li>
                  <li> <Link className={styles.receipies} to={"/receipies"}>Receipies</Link> </li>
                    <li> <Link className={styles.reviews} to={"/reviews"}>Reviews</Link></li>
                      <li> <Link className={styles.contact} to={"/contact"}>Contact</Link> </li>
                  </ul>
            <Search />
    </div>
    
  )
} ;

export default Food ; 