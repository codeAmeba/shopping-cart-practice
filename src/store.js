import { createStore } from 'redux';

const ADD_CART = 'ADD_CART';
const DELETE_CART = 'DELETE_CART';

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

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [{ id: action.id, amount: 1 }, ...state];
    case DELETE_CART:
      return state.filter((product) => product.id !== action.id);
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
};

export default store;
