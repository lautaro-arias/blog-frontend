import React from 'react'
import styles from './Search.module.css'

function Search() {
  return (
    <div className="col-md-2 text-end me-2">
    <div className={styles.container} > 
       <input className={styles.search} type="text" placeholder="Search" aria-label="search"></input>
       <a href='#'>
       </a>
     </div>

       
      
    </div>
  )
}

export default Search