import React, {Component} from 'react';
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
	const {model} =  props;
	console.log('app.props', props)
	return (
	<BrowserRouter>
		<div>
			<nav className='y-web-nav'>
				<a><img className='y-logo' src='http://www.sambeklik.com/wp-content/uploads/2015/06/spotify-300x300.png' /></a>
				<ul className='y-menu'>
					<li><NavLink to="/search"><a>Buscar</a></NavLink></li>
					<li><NavLink to="/start"><a>Inicio</a></NavLink></li>
					<li><NavLink to="/your_music"><a>Tu Música</a></NavLink></li>
          <li><NavLink to="/user"><a>Yolo</a></NavLink></li>

				</ul>
			</nav>
		
			<Switch>
				<Route  path="/spotifyreact"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/search" render={() => <Search model={model} />}/>									   
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/start" render={() => <Start model={model} />}/>
        <Route  path="/user" render={() => <User model={model} />}/>
				<Route  path="/your_music" render={() => <Your_Music model={model} />}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;