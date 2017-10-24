import React, { Component } from 'react';
import './Start.css';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    NavLink
} from 'react-router-dom'

class NavWeb extends Component {
    render() {
        return (
            <nav className='y-web-nav'>
                <a><img className='y-logo' src='images/logo.png' /></a>
                <ul className='y-menu'>
                    <li><NavLink to="/start"><a>Inicio</a></NavLink></li>
                    <li><NavLink to="/your_music"><a>Tu Música</a></NavLink></li>
                </ul>
            </nav>
        )
    }
}

class Start extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <NavWeb />
                    </div>
                    <div className="col-md-9">
                        <div className="y-home">
                            <ul>
                                <li>SELECCIONADOS</li>
                                <li>GÉNEROS Y ESTADOS DE ÁNIMO</li>
                                <li>NOVEDADES</li>
                                <li>DESCUBRIR</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Start;