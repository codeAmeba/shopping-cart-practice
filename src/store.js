import { createStore } from 'redux';

const ADD_CART = 'ADD_CART';
const DELETE_CART = 'DELETE_CART';
const ADD_AMOUNT = 'ADD_AMOUNT';

const addCart = (id) => {
  return {
    type: ADD_CART,
    id,
    amount: 1,
  };
};

const deleteCart = (id) => {
  return {
    type: DELETE_CART,
    id,
  };
};

const addAmount = (id, amount) => {
  return {
    type: ADD_AMOUNT,
    id,
    amount,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [{ id: action.id, amount: 1 }, ...state];
    case DELETE_CART:
      return state.filter((product) => product.id !== action.id);
    case ADD_AMOUNT:
      return state.map((product) => product.amount + 1);
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const actionCreators = {
  addCart,
  deleteCart,
  addAmount,
};

export default store;
