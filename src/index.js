import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import NuevoElemento from './NuevoElemento';
import Estudiante from './Estudiante';
import Header from './header';
import Footer from './footer';
import Contenedor from './Contenedor';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('Header')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('Footer')
);

ReactDOM.render(
  <React.StrictMode>
    <Contenedor />
  </React.StrictMode>,
  document.getElementById('contentMain')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
