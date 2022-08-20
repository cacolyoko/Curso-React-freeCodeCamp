import React from 'react';
import '../css/Testimonio.css';

function Testimonio(props) {

    const html = props.testimonio;

    return(
        <div className='container-testimonio'>
            <img className='img-testimonio' src={require(`../img/testimonio-${props.imagen}.png`)} alt={`Foto de ${props.nombre}`} />
            <div className='container-text-testimonio'>
                <p className='name-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <div className='text-testimonio' dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        </div>
    );
}

export default Testimonio;