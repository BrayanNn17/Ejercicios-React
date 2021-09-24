import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu =() => (

    <nav class="navbar navbar-expand-lg " style={{ background:'#E0FFFF', marginLeft:'-23%', width:'145%',height:'10%'}}>
  <div class="container-fluid" >
  <NavLink to="/" style={{ color:'black',textDecoration:'none' }}><img class="navbar-brand" style={{width:'55%',marginLeft:'30%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHD3bIylRxMhd4h-Hppmp95CzFbnbnw_aM_Q&usqp=CAU"></img></NavLink>
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
<ul>
    <li><NavLink to="/datos_api" style={{ color:'black',textDecoration:'none' }}>API</NavLink></li>
</ul>


        
      </ul>
    </div>
  </div>
  <hr/>
</nav>


)
export default MainMenu;