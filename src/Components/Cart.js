import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { productItems } from '../data/productItems';

function Cart({ cart, deleteCart, addAmount }) {
  const [productsInCart, setProductsInCart] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  // const [productAmount, setProductAmount] = useState(1);

  useEffect(() => {
    setProductsInCart(
      productItems.filter((product) =>
        cart.map((item) => item.id).includes(product.id)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    let total = 0;
    if (!productsInCart) {
      return;
    } else {
      productsInCart.forEach((product) => (total += product.price));
    }
    setTotalPrice(total);
  }, [productsInCart]);

  const handleClick = (id) => {
    deleteCart(id);
  };

  const handleChange = (id, amount) => {
    // const amount = e.target.value;
    // addAmount(id, amount);
    console.log(productsInCart);
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
              <div>
                <label htmlFor='amount'>수량</label>
                <input
                  onChange={() => handleChange()}
                  value='1'
                  id='amount'
                  min='1'
                  type='number'
                />
              </div>
              <button onClick={() => handleClick(product.id)}>삭제</button>
            </section>
          ))}

        <aside>
          <div className='couponList'></div>
          <div className='totalPrice'>
            <h4>총액: {totalPrice} 원</h4>
          </div>
        </aside>
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

    input {
      width: 35px;
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

  aside {
    width: 100%;
    height: 200px;
    padding: 20px;
    background-color: rgba(245, 245, 245, 1);
    bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 25px;
      letter-spacing: 2px;
    }
  }
`;

const mapStateToProps = (state) => {
  return { cart: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (id) => dispatch(actionCreators.deleteCart(id)),
    addAmount: (id, amount) => dispatch(actionCreators.addAmount(id, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
