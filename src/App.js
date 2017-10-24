import React, {Component} from 'react';
import Search from './Search';
import Home from './Home';
import Start from './Start'
import Install from './Install'

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
				<a><img className='y-logo' src='images/logo.png' /></a>
				<ul className='y-menu'>
					<li><NavLink to="/search"><a>Buscar</a></NavLink></li>
					<li><NavLink to="/start"><a>Inicio</a></NavLink></li>
					<li><NavLink to="/your_music"><a>Tu Música</a></NavLink></li>
          <li><NavLink to="/install"><a>Inicio</a></NavLink></li>
				</ul>
			</nav>
		
			<Switch>
				<Route  path="/spotifyreact"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/search" render={() => <Search model={model} />}/>									   
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/start" render={() => <Start model={model} />}/>
        <Route  path="/install" render={() => <Install model={model} />}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;