import React, { Component } from 'react';
import './Install.css';


class Install extends Component {
  render() {
    return (
      <div className="row ycontain">
        <div className="col-xs-2 col-md-2">
        </div>
        <div className="col-md-10 col-lg-10 yinstallcontext">
          <center><img className="yimgInstall" src="https://i.blogs.es/57d35c/captura-de-pantalla-2016-05-25-a-las-16.11.44/original.png" /></center>
          < hr/>
          <h1>¿Ya conoces nuestra aplicación de escritorio?</h1>
          <h2>¡Descárgala para tener la mejor experiencia Spotify!</h2>
          <center><a className="btn btn-green yinstalbtn" target="_blank" href="https://www.spotify.com/download">DESCARGAR APP </a></center>
        </div>
      </div>

    );
  }
}

export default Install;