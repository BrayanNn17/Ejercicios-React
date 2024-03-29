import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cantantes = (props) =>(

<div className="card">
    <div className="card-boy">
       
          


    <h2 className="card-title">{props.nombre}</h2>
    
<p className="card-text">Edad: {props.edad}</p>
<p className="card-text">Genero: {props.genero}</p>
<p className="card-text">Imagen:<br/><img style={{ width: '20%' }} src={props.imagen}  /></p>
<p><Link className="btn btn-primary" style={{ color:'white',textDecoration:'none' }}  to={`/Cantantes/${props.id}`}>Detalles</Link></p>
</div>
</div>

);

Cantantes.propTypes ={
    nombre: PropTypes.string,
    edad:PropTypes.number,
    genero:PropTypes.string,
    
}

Cantantes.defaultProps = {

    nombre:" no tiene nombre"
}
export default Cantantes;