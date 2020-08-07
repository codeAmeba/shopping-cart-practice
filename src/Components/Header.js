import React from 'react';
import styled from 'styled-components';
import Logo from '../Images/logo.png';

function Header() {
	return (
		<HeaderContainer>
			<div>
				<img src={Logo} alt='logo' />
			</div>
			<div>
				<ul>
					<li>
						<a href='/products'>Products</a>
					</li>
					<li>
						<a href='/cart'>Cart</a>
					</li>
				</ul>
			</div>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	width: 100%;
	height: 55px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 1);
	padding: 20px 20px;
	position: fixed;
	top: 0;

	img {
		width: 120px;
		height: auto;
	}

	ul {
		width: 150px;
		display: flex;
		justify-content: space-between;

		li {
			a {
				font-size: 18px;
				font-weight: 600;
				color: rgba(0, 0, 0, 1);
				text-decoration: none;
			}
		}
	}
`;

export default Header;
