import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

import { productItems } from '../productItems';

function Products() {
	const [ itemIndex, setItemIndex ] = useState(0);
	const [ productList, setProductList ] = useState(productItems.slice(0, 5));

	const getMoreProducts = useCallback(
		() => {
			let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
			let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
			let clientHeight = document.documentElement.clientHeight;

			if (scrollTop + clientHeight === scrollHeight) {
				setItemIndex(itemIndex + 5);
				setProductList(productList.concat(productItems.slice(itemIndex + 5, itemIndex + 10)));
			}
		},
		[ itemIndex, productList ]
	);

	useEffect(
		() => {
			window.addEventListener('scroll', getMoreProducts);
			return () => window.removeEventListener('scroll', getMoreProducts);
		},
		[ getMoreProducts, productList ]
	);

	console.log(productList);

	return (
		<React.Fragment>
			<Header />
			<ProductsContainer data-testid='ProductsContainer'>
				{productList.map(product => (
					<section key={product.id} value={product.score}>
						<div className='imgWrapper'>
							<img src={product.coverImage} alt={product.title} />
						</div>
						<div className='textWrapper'>
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
		margin-bottom: 50px;
		overflow: hidden;

		.imgWrapper {
			width: 100%;

			img {
				width: 100%;
				height: auto;
				transition: 0.4s ease-in-out;
			}
			img:hover {
				transform: scale(1.1);
			}
		}

		.textWrapper {
			padding-top: 30px;
		}
	}
`;

export default Products;
