import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Header from './Components/Header';

function Routes() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/products' component={Products} />
				<Route exact path='/cart' component={Cart} />
			</Switch>
			<GlobalStyles />
		</Router>
	);
}

const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;

    ol, ul {
      list-style: none;
    }
  }
`;

export default Routes;
