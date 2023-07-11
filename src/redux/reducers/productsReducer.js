import { ADD_PRODUCTS, CATEGORY_ACTIVE, LOADING } from "../actions/actionsHome/productsActions";

const INITIAL_STATE_USER = {
  products: [],
  categoryActive: 'MLB5672',
  isLoading: false
};

const productsReducer = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case ADD_PRODUCTS:
  return {
    ...state,
    products: action.payload,
  };
  case CATEGORY_ACTIVE:
  return {
    ...state,
    categoryActive: action.payload,
  };
  case LOADING:
  return {
    ...state,
    isLoading: action.payload
  };
  default:
    return state;
  }
};

export default productsReducer;
