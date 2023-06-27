import React from 'react';
import styles from './Banner.module.css';

import banner1 from '../image/banner-img/banner1.png' ;

function Banner() {
  return (
    <div className={styles.back}> 
      <div className="card mt-2">
          <img src={banner1}  className={styles.img} alt="img-banner"/>
               <div className="card-img-overlay">
                  <div className={styles.container}> 
                    <a className={styles.title}>Hello chef friend</a>
                    <p><a className={styles.text}>It's time to choose one of our fabulous recipes so you can enjoy and share it with our community.</a></p>
                  </div>
              </div>
        </div>
  </div>

   
  )
};

export default Banner;