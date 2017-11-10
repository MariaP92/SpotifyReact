import React, { Component } from "react";
import "./sass/main.css";

class User extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="userCtn col-md-6 col-md-offset-3 text-center">
            <div>
              <img
                src="http://i0.kym-cdn.com/entries/icons/facebook/000/009/242/yolo.jpg"
                alt="yolo_imagen"
                className="userCtn--img "/>
              <h1>YOLO</h1>
            </div>
            <div className="userCtn__btnG">
              <div>
                <a
                  className="btn-y"
                  href="https://www.spotify.com/account/?utm_source=play&utm_campaign=wwwredirect&utm_medium=stp_test"
                  style={{ minWidth: 240 }}
                >
                  VER CUENTA
                </a><br/>
              </div>
              <div >
                <a
                  className="btn-y"
                  href="https://www.spotify.com/home?utm_source=play&utm_campaign=wwwredirect&utm_medium=stp_test"
                  style={{ minWidth: 240 }}
                >
                  SITIO WEB COMPLETO
                </a>
              </div>
              <div>
                <a
                  className="btn-y"
                  href="https://support.spotify.com/?utm_source=play&utm_campaign=wwwredirect&utm_medium=stp_test"
                  style={{ minWidth: 240 }}
                >
                  AYUDA
                </a>
              </div>
              <div >
                <a
                  className="btn-y"
                  href="#"
                  style={{ minWidth: 240 }}
                >
                  CERRAR SESION
                </a>
              </div>
            </div><br/>
            <div className="userCtn__footerLinks">
              <a
                className="footerLinks__item"
                href="https://www.spotify.com/legal/"
              >
                Información legal
              </a>
              <span>|</span>
              <a
                className="footerLinks__item "
                href="https://www.spotify.com/legal/privacy-policy/"
              >
                Privacidad
              </a>
              <span>|</span>
              <a
                className="footerLinks__item"
                href="https://www.spotify.com/legal/privacy-policy/#s13"
              >
                Cookies
              </a>
              <span>|</span>
              <a
                className="footerLinks__item "
                href="https://www.spotify.com/legal/privacy-policy/#s13"
              >
                Acerca de los anuncios
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
