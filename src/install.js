import React, { Component } from 'react';
import logo from './logo.svg';
import './Install.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'



const Install = () => {
  return (
    <div className="hw-accelerate">
      <section style={{ height: '100%' }}>
        <header className="ZkMs_b0D5CxRkpMsqWenC">
        </header>
        <div className="downloadPage">
          <div className="downloadPage-inner">
            <img src="/static/images/devices/mac.png" />
            <h1
              className="_1ggXflHuWSAAo1nVpFSlQp _1dJ5wNF1VI49YsWnX45E9Y"
              style={{ textAlign: 'center' }}>
              ¿Ya conoces nuestra aplicación de escritorio?
</h1>
            <h2
              className="_1ggXflHuWSAAo1nVpFSlQp _3jDzDkO6Of6ut021offe4R"
              style={{ textAlign: 'center' }}>
              ¡Descárgala para tener la mejor experiencia Spotify!
</h2>
            <a
              className="btn btn-green"
              target="_blank"
              href="https://www.spotify.com/download">
              DESCARGAR APP
</a>
          </div>
        </div>
      </section>
    </div>

  );
}


export default Install;