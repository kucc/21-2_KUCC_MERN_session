import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import BoardPage from './pages/home/BoardPage';

const App = () => {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	const isLoggedIn = true;
	return (
		<>
			{!isLoggedIn ? (
				<Switch>
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignUpPage} />
					<Redirect exact to="/login" />
				</Switch>
			) : (
				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route path="/board" component={BoardPage} />
					<Redirect exact to="/" />
				</Switch>
			)}
		</>
	);
};

export default App;
