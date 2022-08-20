import React from 'react';
import '../css/Testimonio.css';

class Testimonio extends React.Component {
    render() {
        const html = this.props.testimonio;

        return(
            <div className='container-testimonio'>
                <img className='img-testimonio' src={require(`../img/testimonio-${this.props.imagen}.png`)} alt={`Foto de ${this.props.nombre}`} />
                <div className='container-text-testimonio'>
                    <p className='name-testimonio'><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
                    <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
                    <div className='text-testimonio' dangerouslySetInnerHTML={{__html: html}}></div>
                </div>
            </div>
        );
    }
}

export default Testimonio;