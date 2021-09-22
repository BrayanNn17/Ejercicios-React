import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
import{BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Contenedor from './Contenedor';
import header from './header';
import Contacto from './Contacto';
import CantantesDetalle from './CantantesDetalle';
import MainMenu from './MainMenu';
import Footer from './footer';
import DatosApi from './DatosApi';

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
