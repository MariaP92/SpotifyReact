import React, { Component } from 'react';
import './sass/main.css';


class Install extends Component {
  render() {
    return (
      <div className="row ycontain">
        <div className="col-xs-3 col-md-3">
        </div>
        <div className="col-md-9 col-lg-9 ycontain__ycontext">
          <center><img className="ycontain__ycontext--yimg" src="https://open.spotify.com/static/images/devices/mac.png" /></center>
          <h1>¿Ya conoces nuestra aplicación de escritorio?</h1>
          <h2>¡Descárgala para tener la mejor experiencia Spotify!</h2>
          <center><a className="btn btn-green ycontain__ycontext--ybtn" target="_blank" href="https://www.spotify.com/download">DESCARGAR APP </a></center>
        </div>
      </div>
    );
  }
}

export default Install;