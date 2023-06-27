import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home'
import Contact from './routes/Contact';
import Features from './routes/Features'
import Receipies from './routes/Receipies'
import Reviews from './routes/Reviews'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//import Estrellas from './components/subcomponents/Estrellas';
//ReactDOM.render(<Estrellas score={5} />,document.getElementById('root'))

const router = createBrowserRouter([ 
  {
    path: '/register',
    element:<h1>contact</h1>
  },
  {
    path: '/login',
    element:<h1>contact</h1>
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/features',
    element: <Features />,
  },
  {
    path: '/receipies',
    element:<Receipies />,
  },
  {
    path: '/reviews',
    element:<Reviews />,
  },
  {
    path: '/contact',
    element:<Contact />
  },

]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
