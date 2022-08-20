import React from 'react';
import '../css/Logo.css'

function Logo({ fuente }) {
    return (
        <div className='freecodecamp-logo-contenedor'>
            <img className='freecodecamp-logo' src={ fuente } alt='Logo de freeCodeCamp' />
        </div>
    );
};

export default Logo;