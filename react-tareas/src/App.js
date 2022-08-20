import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
