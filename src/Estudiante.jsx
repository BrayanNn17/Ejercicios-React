import React from 'react';
import PropTypes from 'prop-types';

const Estudiante = (props) =>(

<div className="card">
    <div className="card-boy">
        {/* Operador Ternario*/ }
          


    <h2 className="card-title">{props.nombre}</h2>
    
<p className="card-text">Edad: {props.edad}</p>
<p className="card-text">Genero: {props.genero}</p>
</div>
</div>

);

Estudiante.propTypes ={
    nombre: PropTypes.string,
    edad:PropTypes.number,
    genero:PropTypes.string

}

Estudiante.defaultProps = {

    nombre:" no tiene nombre"
}
export default Estudiante;