import React from 'react' ;
import styles from './Colun.module.css';

import img1 from '../image/colun-img/img1-colun.png';
import img2 from '../image/colun-img/img2-colun.png';
import img3 from '../image/colun-img/img3-colun.png';
import img4 from '../image/colun-img/img4-colun.png';
import img5 from '../image/colun-img/img5-colun.png';


function Colun() {
  return (
      <div className={styles.container} > 
              <h1 className={styles.h1}>Join the largest community of recipes and meals on instagram !!!</h1>
              <h2 className={styles.h2}>share and know the best photos of your meals</h2>
                 <button className={styles.button}> 
                   <a className={styles.link} href='https://www.instagram.com/foodloverspro/' target="_blank">Join up</a>
                 </button>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
               <div className={styles.div}> 
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src={img1} class={styles.img} alt="img1-colun.png"/>
                      </div>
                      <div class="carousel-item">
                        <img src={img2} class={styles.img} alt="img2-colun.png"/>
                      </div>
                      <div class="carousel-item">
                        <img src={img3} class={styles.img} alt="img3-colun.png"/>
                      </div>
                      <div class="carousel-item">
                        <img src={img4} class={styles.img} alt="img4-colun.png"/>
                      </div>
                      <div class="carousel-item">
                        <img src={img5} class={styles.img} alt="img4-colun.png"/>
                      </div>
                 </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
              </div>
        </div>
   </div>

  )
};

export default Colun ;



