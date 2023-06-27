import React from 'react';
import styles from  '../headers/Colorlib.module.css';

function Colorlib() {
  return (
    <div className={styles.colorlib}>
        <div className="col-md-3 mb-2 mb-md-0 ms-2">
              <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                <img src="logo/colorlib-logo-top.png" alt="colorlib-logo" width="150"/>
              </a>
        </div>
   </div>

  )
};

export default Colorlib ;