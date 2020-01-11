import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as serviceWorker from './serviceWorker';

class SignIn extends Component {
    state = {
      user: '',
      email: '',
      date: '',
      address: '',
      numReg: 0,
      fistData: 'true'
    };
    cont = localStorage.getItem('numReg');
  
    componentDidMount() {
      var intCount = parseInt(localStorage.getItem('numReg'));
      if (intCount > 0) {
        localStorage.setItem('firstData', 'false');
        for (var i = 1; i <= intCount; i++) {
            const user = localStorage.getItem('user'+ i);
            const email = localStorage.getItem('email'+ i);
            const date = localStorage.getItem('date'+ i);
            const address = localStorage.getItem('address'+ i);

            var table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
            var row = table.insertRow(i-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            cell1.innerHTML = i;
            cell2.innerHTML = user;
            cell3.innerHTML = email;
            cell4.innerHTML = date;
            cell5.innerHTML = address;
        }
      }
    }
  
    handleChange = (event) => {
      const input = event.target;
      const value = input.type === 'checkbox' ? input.checked : input.value;
      this.setState({ [input.name]: value });
    };
  
    handleFormSubmit = () => {
      const { user, email, date, address } = this.state;
      var fisrtD = parseInt(localStorage.getItem('numReg'));
      var value = localStorage.getItem('firstData') === null ? 1 : fisrtD + 1;
      localStorage.setItem('numReg', value);
      localStorage.setItem('user'+ value, user);
      localStorage.setItem('email'+ value, email);
      localStorage.setItem('date'+ value, date);
      localStorage.setItem('address'+ value, address);
    };
  
    render() {
      return (
        <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#top">Registro y consulta de usuarios</a>
            </div>
            <ul className="nav navbar-nav">
              <a href="#top">Miguel Angel Miranda Olvera</a>
            </ul>
          </div>
        </nav>
        <header className="App-header">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <form onSubmit={this.handleFormSubmit}>
                        <h3>Captura de usuario</h3>
                        <div class="form-group">
                            <label for="user">Nombre</label>
                            <input type="text" onChange={this.handleChange} class="form-control" name="user" value={this.state.user} id="user"></input>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo</label>
                            <input type="email" onChange={this.handleChange} class="form-control" name="email" value={this.state.email} id="email" aria-describedby="inpEmail"></input>
                            <small id="email" class="form-text text-muted">Coloque un correo válido.</small>
                        </div>
                        <div class="form-group">
                            <label for="date">Fecha de nacimiento</label>
                            <input type="date" onChange={this.handleChange} class="form-control" name="date" value={this.state.date} id="date"></input>
                            <small id="date" class="form-text text-muted">dd/mm/aaaa</small>
                        </div>
                        <div class="form-group">
                            <label for="address">Domicilio</label>
                            <input type="text" onChange={this.handleChange} class="form-control" name="address" value={this.state.address} id="address" aria-describedby="inpAddress"></input>
                            <small id="address" class="form-text text-muted">Calle, número y colonia.</small>
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </form>
                </div>
                <div class="col-5">
                <h3>Usuarios registrados</h3>
                    <table name="tableData" id="tableData" class="table table-hover table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Fecha de nacimiento</th>
                            <th scope="col">Domicilio</th>
                            </tr>
                        </thead>
                        <tbody name="tbodyData" id="tbodyData">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </header>
        <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
        </Map>
      </div>
      );
    }
  }
  export default GoogleApiWrapper({
    apiKey: ('')
  })(SignIn)

ReactDOM.render(<SignIn />, document.getElementById('root'));
serviceWorker.unregister();
