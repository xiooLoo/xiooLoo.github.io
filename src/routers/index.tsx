import React from 'react';
import {
  HashRouter  as Router,
  Switch,
	Route,
	Redirect,
} from "react-router-dom";
// import Header from '../components/Header';
import Home from '../pages/home';
import Login from '../pages/login';
import Birth from '../pages/birthday';

const basename = '/';

const RouterConfig = () => {
	return (
		<Router basename={basename}>
	      <Switch>
					<Route path='/login' component={Login} />
					<Route path='/home' component={Home} />
					<Route path="/birth" component={Birth} />
					<Redirect to="/login" />
				</Switch>
	    </Router>
	);
}

export default RouterConfig;