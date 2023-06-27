
import Index from './components/headers/Index.js'; 
import Carrusel from './components/home/Carrusel.js';
import Banner from './components/home/Banner';
import Cards  from './components/home/Cards.js';
import Tables from './components/home/Tables';
import Colun from './components/footer/Colun';
import Footer from './components/footer/Footer.js';

import styles from  './App.module.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
      <div className= {styles.container}> 
              <Index />
              <Carrusel />
              <Banner /> 
              <Cards />
              <Tables /> 
              <Colun />
              <Footer/>  
      </div>   
  )
} ;

export default App;