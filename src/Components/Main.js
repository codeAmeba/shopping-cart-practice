import React from 'react';
import styled from 'styled-components';

function Main() {
	return (
		<MainContainer data-testid='MainContainer'>
			<div>
				<h1>상단의 Products 탭을 클릭해주세요.</h1>
			</div>
		</MainContainer>
	);
}

const MainContainer = styled.main`
	width: 100%;
	height: 100%;
	margin-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;

		h1 {
			font-size: 25px;
			line-height: 40px;
		}
	}
`;

export default Main;
