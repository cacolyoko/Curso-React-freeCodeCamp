import React from 'react';
import '../css/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Tarea({ id, texto, completada, completarTarea, deleteTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className='tarea-texto' onClick={() => completarTarea(id)}>
                { texto }
            </div>
            <div className='tarea-contenedor-iconos' onClick={() => deleteTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    );
}

export default Tarea;