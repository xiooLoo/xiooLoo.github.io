import React, { useState, useEffect } from 'react';
import {
  HashRouter,
  Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Root from '../pages/root';
import Login from '../pages/login';
import Home from '../pages/home';
import Birth from '../pages/birthday';
import Quill from '../pages/quill';
import MKDown from '../pages/mkdown';

// TS:练习文件
import TSZero from '../pages/ts-000';

const RouterConfig = () => {
	const [isLogin, setIsLogin] = useState(true)
	useEffect(() => {
		setIsLogin(true)
	}, [isLogin])
	return (
		<HashRouter>
			<Switch>
				<Route path='/login' component={Login} />
				{isLogin ? (
					<Route path='/' component={Root}>
						<Root>
							<Switch>
								<Route exact path="/home" component={Home} />
								<Route exact path="/birth" component={Birth} />
								<Route exact path="/quill" component={Quill} />
								<Route exact path="/mkdown" component={MKDown} />
								{/* ts测试文件 */}
								<Route exact path="/tszero" component={TSZero} />
							</Switch>
						</Root>
					</Route>
				) : (
					<Redirect from="/" to="/login" />
				)}
			</Switch>
		</HashRouter>
	);
}

export default RouterConfig;