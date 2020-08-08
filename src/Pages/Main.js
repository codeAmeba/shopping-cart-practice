import React from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';

function App() {
	return (
		<React.Fragment>
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
