import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
			</Switch>
		</Router>
	);
}

export default Routes;
