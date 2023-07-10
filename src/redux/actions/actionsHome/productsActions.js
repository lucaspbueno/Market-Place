export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const LOADING = 'LOADING';
export const CATEGORY_ACTIVE = 'CATEGORY_ACTIVE';

export const loadProducts = (payload) => ({
  type: ADD_PRODUCTS,
  payload,
});

export const setActiveCategory = (payload) => ({
  type: CATEGORY_ACTIVE,
  payload,
});

export const enableLoading = (payload) => ({
  type: LOADING,
  payload,
});