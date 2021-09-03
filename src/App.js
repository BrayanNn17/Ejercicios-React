import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
import{BrowserRouter as Router,Route} from "react-router-dom";
import Contenedor from './Contenedor';
import header from './header';
import Contacto from './Contacto';

const App = () => (
  <Router>
    <Route path="/" exact component={header}/>
    <Route path="/Cantantes"  exact component={Contenedor}/>
    <Route path="/Contacto" exact component={Contacto}/>
  </Router>
)

export default App;
