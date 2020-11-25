import React from 'react';
import '../style/navBar.css';
import logo from '../img/logo.png';
import casa from '../img/casa.png';
import edif from '../img/edif.png';
import cerrar from '../img/cerrar.png';
import "bootstrap/dist/css/bootstrap.min.css";



const NavigationBar= () => {
  return(
  <div className="card-body left">
    <img className="logoins" src={logo} alt="logo"/>
    <p className="card-title text">Plataforma de acceso a documentos</p>
    <br/>
    <br/>
    <div className="options">
      <p className="card-header title"><img src={casa} alt=""/>Principal</p>
      <p className="card-header title"><img src={edif} alt=""/>TGP</p>
      <p className="card-header title"><img src={edif} alt=""/>COGA</p>
    </div>
    <br/>
    <br/>
    <div>
    <button className="btn"><img src={cerrar} alt=""/>Cerrar sesión</button>
    </div>
  </div> 
  )
}

export default NavigationBar;
