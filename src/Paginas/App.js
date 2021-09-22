import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
import{BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Contenedor from '../Organismos/Contenedor';
import header from '../Atomos/header';
import Contacto from '../Moleculas/Contacto';
import CantantesDetalle from '../Moleculas/CantantesDetalle';
import MainMenu from '../Atomos/MainMenu';
import Footer from '../Atomos/footer';
import DatosApi from '../Organismos/DatosApi';

const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
    
    <Route path="/" exact component={header}/>
    
    <Route path="/Cantantes/"  exact component={Contenedor}/>
    <Route path="/Cantantes/:id"  exact component={CantantesDetalle}/>
    <Route path="/Contacto" exact component={Contacto}/>
    <Route path="/datos_api" exact component={ DatosApi }/>
    
    <Route component={() => (
                  <h1>Pagina no encontrada</h1>

                  )}/>
    

    </Switch>
    <Footer></Footer>
  </Router>
)

export default App;
