import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { productItems } from '../data/productItems';

function Cart({ cart, deleteCart }) {
  const [productsInCart, setProductsInCart] = useState();

  useEffect(() => {
    setProductsInCart(
      productItems.filter((product) =>
        cart.map((item) => item.id).includes(product.id)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const handleClick = (id) => {
    deleteCart(id);
  };

  return (
    <>
      <CartContainer data-testid='CartContainer'>
        {productsInCart &&
          productsInCart.map((product) => (
            <section key={product.id}>
              <div className='imgWrapper'>
                <img src={product.coverImage} alt={product.title} />
              </div>
              <div className='titleWrapper'>
                <h4>{product.title}</h4>
              </div>
              <div className='priceWrapper'>
                <p>{product.price} 원</p>
              </div>
              <button onClick={() => handleClick(product.id)}>삭제</button>
            </section>
          ))}
      </CartContainer>
    </>
  );
}

const CartContainer = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  section {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .imgWrapper {
      width: 180px;
      height: 180px;
      overflow: hidden;
      border-radius: 3px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: 0.3s ease-in-out;
        border-radius: 3px;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .titleWrapper {
      width: 50%;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;

      h4 {
        line-height: 28px;
      }
    }

    .priceWrapper {
      p {
        font-weight: 800;
      }
    }

    button {
      width: 50px;
      height: 25px;
      font-size: 14px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 1);
      cursor: pointer;
      border-radius: 3px;

      &:hover {
        background-color: #0677aa;
        border: none;
        color: #fff;
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return { cart: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // eslint-disable-next-line no-undef
    deleteCart: (id) => dispatch(actionCreators.deleteCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
