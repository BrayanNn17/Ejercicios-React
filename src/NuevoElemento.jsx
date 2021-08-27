import React from 'react';

let estudiante = {

    nombre:"maria",
    edad:23


};



const NuevoElemento = (props) =>(
<div className="contenedor">


<h3>Estudiante</h3>
<h4>{props.nombre}</h4>
<h4>{ estudiante.nombre }</h4>
<p> Edad: { estudiante.edad }</p>



</div>

)

export default NuevoElemento;