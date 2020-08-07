import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

function Cart() {
	return (
		<React.Fragment>
			<Header />
			<CartContainer data-testid='CartContainer'>cart page</CartContainer>
		</React.Fragment>
	);
}

const CartContainer = styled.main`
	width: 100%;
	height: 100%;
`;

export default Cart;
