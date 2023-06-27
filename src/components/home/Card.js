import React from 'react' ;
import styles from './Card.module.css';

function Card({title,image,url}) {
  return (
        
   <div className={styles.container} > 
         <div className="card" > 
              <img src={image} className={styles.img} alt=""/>
                <div className={styles.body} >
                  <h5 className={styles.title} >{title}</h5>
                  <a href={url} className={styles.botton} target="_blank" >Reseta</a>
               </div>
          </div>
   </div>
    
  )
} ;

export default Card ;