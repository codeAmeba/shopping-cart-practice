import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';

function Header() {
	return (
		<HeaderContainer>
			<div>
				<Link to='/'>
					<img src={Logo} alt='logo' />
				</Link>
			</div>
			<div>
				<ul>
					<li>
						<Link to='/products'>Products</Link>
					</li>
					<li>
						<Link to='/cart'>Cart</Link>
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
	padding: 20px 20px;
	position: fixed;
	top: 0;
	z-index: 20;

	img {
		width: 100px;
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
