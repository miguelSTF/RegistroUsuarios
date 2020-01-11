import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#top">Registro y consulta de usuarios</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#desserts">Miguel Angel Miranda Olvera</a></li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
      <form>
        <div class="form-group">
          <label for="inpName">Nombre</label>
          <input type="text" class="form-control" id="inpName"></input>
        </div>
        <div class="form-group">
          <label for="inpEmail">Correo</label>
          <input type="email" class="form-control" id="inpEmail" aria-describedby="inpEmail"></input>
          <small id="inpEmail" class="form-text text-muted">Coloque un formato de correo válido.</small>
        </div>
        <div class="form-group">
          <label for="inpDate">Fecha de nacimiento</label>
          <input type="date" class="form-control" id="inpDate"></input>
          <small id="inpDate" class="form-text text-muted">dd/mm/aaaa</small>
        </div>
        <div class="form-group">
          <label for="inpAddress">Domicilio</label>
          <input type="email" class="form-control" id="inpAddress" aria-describedby="inpAddress"></input>
          <small id="inpAddress" class="form-text text-muted">Calle, número, colonia.</small>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
      </header>
    </div>
  );

}



export default App;
