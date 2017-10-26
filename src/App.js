import React, { Component } from 'react';
import Search from './Search';
import Home from './Home';
import Start from './Start'
import User from './user.js'
import Your_Music from './Your_Music'

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
				<div className="col-md-3">
				<nav className='y-web-nav'>
					<a><img className='y-logo' src='http://www.sambeklik.com/wp-content/uploads/2015/06/spotify-300x300.png' /></a>
					<ul className='y-menu'>
						<li><NavLink to="/search"><a>Buscar</a></NavLink></li>
						<li><NavLink to="/start"><a>Inicio</a></NavLink></li>
						<li><NavLink to="/your_music"><a>Tu Música</a></NavLink></li>
						<li><NavLink to="/user"><a>Yolo</a></NavLink></li>

					</ul>
				</nav>
				</div>
				<div className="col-xs-9 col-xs-offset-3 col-sm-9 col-sm-offset-3 col-md-9 col-md-offset-3 col-lg-9 col-lg-offset-3">
                    
				<Switch>
					<Route path="/spotifyreact"
						render={() => <Redirect to={'/home'} />} />
					<Route path="/search" render={() => <Search model={model} />} />
					<Route path="/home" render={() => <Home model={model} />} />
					<Route path="/start" render={() => <Start model={model} />} />
					<Route path="/user" render={() => <User model={model} />} />
					<Route path="/your_music" render={() => <Your_Music model={model} />} />
					<Route component={Home} />
				</Switch>
			</div>
                </div>
		</BrowserRouter>)
}

export default App;