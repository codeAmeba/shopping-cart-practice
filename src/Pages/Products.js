import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import { productItems } from '../productItems';

function Products() {
	const [ productList, setProductList ] = useState([]);

	useEffect(() => {
		getProductList();
	}, []);
	console.log(productList);

	const getProductList = () => {
		setProductList([ ...productItems ]);
	};

	return (
		<React.Fragment>
			<Header />
			<ProductsContainer data-testid='ProductsContainer'>
				{productList.map(product => (
					<section key={product.id} value={product.score}>
						<img src={product.coverImage} alt={product.title} />
						<div>
							<h4>{product.title}</h4>
							<p>{product.price}</p>
						</div>
					</section>
				))}
			</ProductsContainer>
		</React.Fragment>
	);
}

const ProductsContainer = styled.main`
	width: 100%;
	height: 100%;
	margin-top: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	section {
		width: 70%;

		img {
			width: 100%;
			height: auto;
		}
	}
`;

export default Products;
