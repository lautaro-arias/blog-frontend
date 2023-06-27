import React from 'react';
import Colorlib from './Colorlib';
import Redes from './Redes';
import Food from './Food';

function Index() {
  return (
    <div className="container-flex">
          <div> 
          <Colorlib />
          </div>
          <div> 
              <Redes/>
          </div>
          <div> 
              <Food />
          </div>    
    </div>
  )
};

export default Index;