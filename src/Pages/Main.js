import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

function App() {
	return (
		<React.Fragment>
			<MainContainer data-testid='MainContainer'>TEST</MainContainer>
			<GlobalStyles />
		</React.Fragment>
	);
}

const GlobalStyles = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
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

const MainContainer = styled.main`
	width: 100%;
	height: 100%;
`;

export default App;
