import React, { Component } from 'react';
import Search from './Search';
import Home from './Home';
import Start from './Start'
import Install from './install'
import User from './user.js'
import Your_Music from './Your_Music'
import './sass/main.css'
import Footer from './y-footer.js'

import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
	NavLink
} from 'react-router-dom'

const App = (props) => {
	const { model } = props;
	console.log('app.props', props)
	return (
		<BrowserRouter>
			<div>
				<nav className='nav'>
					<a><img className='nav__img' src='http://www.sambeklik.com/wp-content/uploads/2015/06/spotify-300x300.png' /></a>
					<ul className='nav__ul menu'>
						<li><NavLink to="/search">Buscar</NavLink></li>
						<li><NavLink to="/start">Inicio</NavLink></li>
						<li><NavLink to="/your_music">Tu Música</NavLink></li>
						<li><NavLink to="/install">Instalar Aplicacion</NavLink></li>
						<li><NavLink to="/user">Yolo</NavLink></li>

					</ul>
				</nav>
                    
				<Switch>
					<Route path="/spotifyreact"
						render={() => <Redirect to={'/home'} />} />
					<Route path="/search" render={() => <Search model={model} />} />
					<Route path="/home" render={() => <Home model={model} />} />
					<Route path="/start" render={() => <Start model={model} />} />
					<Route path="/user" render={() => <User model={model} />} />
					<Route path="/your_music" render={() => <Your_Music model={model} />} />
					<Route path="/install" render={() => <Install model={model} />} />
					<Route component={Home} />
				</Switch>
				<Footer/>

			</div>
		</BrowserRouter>)
}

export default App;