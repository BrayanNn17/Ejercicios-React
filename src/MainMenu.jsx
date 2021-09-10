import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu =() => (
<ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/Cantantes">Cantantes</NavLink></li>
    <li><NavLink to="/Contacto">Contacto</NavLink></li>
</ul>

)
export default MainMenu;