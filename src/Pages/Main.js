import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function App() {
	return (
		<React.Fragment>
			<Header />
			<MainContainer data-testid='MainContainer' />
			<Footer />
		</React.Fragment>
	);
}

const MainContainer = styled.main`
	width: 100%;
	height: 100%;
`;

export default App;
