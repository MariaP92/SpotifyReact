import React, { Component } from 'react';
import './home.css';
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

// const YFooter = () => {
// 	<div className=' col-md-12 y-footer'>
// 		hjfhdmfvbdfmnvb
// 	</div>
// }


class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3 col-sm-12 col-xs-12">
						<NavWeb />
					</div>

					<div className="col-md-9">
						<div>HOME</div>
					</div>


				</div>
				<div className="row">
					<div className=' col-md-12 y-footer'>
						hjfhdmfvbdfmnvb
	               </div>
				</div>
			</div>
		)
	}
}
export default Home;