import React from 'react';
import styles from './Table.module.css';
//import Estrellas from '../subcomponents/Estrellas';

function Table({title,image,url}) {
  return (
    <div className={styles.table} > 
       <div className={styles.container} >
           <div class="row g-0">
                <div className="col-md-4">
                  <img src={image} class={styles.img}  alt="..."/>
                    </div>
                        <div className="col-md-4">
                            <div class="card-body">
                                <h5 className={styles.fecha}>march 14,2023</h5>
                                <h4 className={styles.name} >{title}</h4>
                                <p className="card-text">
                                <a href={url}></a>
                                </p>
                          </div>
                    </div>
               </div>
         </div>
  </div>
  )
};

export default Table ;