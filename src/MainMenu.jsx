import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu =() => (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" >
    <a class="navbar-brand" href="#">Cantantes App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <ul>
      <li><NavLink to="/" style={{ color:'black',textDecoration:'none' }}>Inicio</NavLink></li>
        </ul>
    <ul>
    <li><NavLink to="/Cantantes" style={{ color:'black',textDecoration:'none' }}>Cantantes</NavLink></li>
    </ul>
    <ul>
    <li><NavLink to="/Contacto" style={{ color:'black',textDecoration:'none' }}>Contacto</NavLink></li>
</ul>


        
      </ul>
    </div>
  </div>
</nav>

)
export default MainMenu;