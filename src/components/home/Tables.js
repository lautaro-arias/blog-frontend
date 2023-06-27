import React from 'react' ;
import Table from './Table';

import styles from './Tables.module.css' ;

import image1 from '..//image/table-img/img1.png';
import image2 from '..//image/table-img/img2.png';
import image3 from '..//image/table-img/img3.png';
import image4 from '..//image/table-img/img4.png';    
import image5 from '..//image/table-img/img5.png';
import image6 from '..//image/table-img/img6.png';

const tables = [
    {
        id: 1,
        title:'Masala dosa',
        image:image1 ,
        url:'https://elgourmet.com/recetas/',
    },
    {
        id: 2,
        title:'Paella de mariscos',
        image:image2,
        url:'https://elgourmet.com/recetas/'
    },
    {
        id: 3,
        title:'Som tam',
        image:image3,
        url:'https://elgourmet.com/recetas/'
    },
    {
        id: 4,
        title:'Poutine',
        image:image4,
        url:'https://elgourmet.com/recetas/'
    },
    {
        id: 5,
        title:'Hummus',
        image:image5,
        url:'https://elgourmet.com/recetas/'
    },
    {
        id: 6,
        title:'Ankimo',
        image:image6,
        url:'https://elgourmet.com/recetas/'
    }

] ;


function Tables() {
  return (
    <div className={styles.container} >
            <div className="row">
                <h2 className= {styles.title}>Top rated recipes</h2>
                     { tables.map(table => (
                            <div className="col-md-6 " key={table.id}>
                                 <Table title={table.title} image={table.image} url={table.url}/>
                             </div>
                        ))
                     }
            </div>                                  
        </div>
    
  )
} ;

export default Tables ;