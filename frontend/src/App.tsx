import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Intro from './Intro';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

const App = () => {
	return (
		<Switch>
			<Route path="/" component={HomePage} exact />
			<Route path="/login" component={LoginPage} />
			<Route path="/signup" component={SignUpPage} />
			<Route path="/board" component={Intro} />
			<Redirect exact to="/" />
		</Switch>
	);
};

export default App;
