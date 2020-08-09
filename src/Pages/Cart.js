import React from 'react';
import styled from 'styled-components';

function Cart() {
	return (
		<React.Fragment>
			<CartContainer data-testid='CartContainer'>
				<div>
					<h1>This is Cart page</h1>
				</div>
			</CartContainer>
		</React.Fragment>
	);
}

const CartContainer = styled.main`
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
			font-size: 30px;
		}
	}
`;

export default Cart;
