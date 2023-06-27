import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';

import image1 from '..//image/card-img/image1.png';
import image2 from '..//image/card-img/image2.png';
import image3 from '..//image/card-img/image3.png';
import image4 from '..//image/card-img/image4.png';
import image5 from '..//image/card-img/image5.png';
import image6 from '..//image/card-img/image6.png';


const cards = [
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

];


function Cards() {
  return (
        <div className={styles.container} >
            <div className="row">
                 <h1 className= {styles.title}>Latest recipes </h1>
                     { cards.map(card => (
                            <div className="col-md-6 col-lg-4 " key={card.id}>
                                 <Card title={card.title} image={card.image} url={card.url}/>
                             </div>
                        ))
                     }
            </div>                                  
        </div>
  )
};

export default Cards;