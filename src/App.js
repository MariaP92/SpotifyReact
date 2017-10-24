import React, {Component} from 'react';
import Home from './Home';
import Start from './Start'

import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route  path="/spotifyreact"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/start" render={() => <Start model={model} />}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
