import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { productItems } from '../productItems';

function Products() {
	const [ itemIndex, setItemIndex ] = useState(0);
	const [ productList, setProductList ] = useState(productItems.slice(0, 5));
	const [ cart, setCart ] = useState([]);

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

	const addCart = id => {
		if (cart.length > 2) {
			return alert('장바구니에는 최대 3개만 담을 수 있습니다.');
		} else {
			setCart([ ...cart, { id, amount: 1 } ]);
		}
	};

	return (
		<React.Fragment>
			<ProductsContainer data-testid='ProductsContainer'>
				{productList.map(product => (
					<section key={product.id} value={product.score}>
						<div className='imgWrapper'>
							<img src={product.coverImage} alt={product.title} />
						</div>
						<div className='textWrapper'>
							<div>
								<h4>{product.title}</h4>
								<p>{product.price} 원</p>
							</div>
							<button onClick={() => addCart(product.id)} type='button'>
								담기
							</button>
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
		border-radius: 5px;
		position: relative;

		button {
			width: 50px;
			height: 25px;
			font-size: 14px;
			margin-left: 20px;
			cursor: pointer;
			background-color: #fff;
			border: 1px solid rgba(0, 0, 0, 1);
			border-radius: 3px;

			&:hover {
				color: #fff;
				background-color: rgba(0, 0, 0, 1);
			}
		}

		.imgWrapper {
			width: 100%;
			overflow: hidden;
			border-radius: 5px;

			img {
				width: 100%;
				height: auto;
				object-fit: cover;
				transition: 0.3s ease-in-out;
				border-radius: 5px;

				&:hover {
					transform: scale(1.1);
				}
			}
		}

		.textWrapper {
			padding-top: 30px;
			display: flex;
			justify-content: space-between;
		}
	}
`;

export default Products;
