import {
  FETCH_ROBOTS_REQUEST,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILURE,
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
  FILTER_ROBOTS,
} from './actionTypes';

export const robotRequest = () => ({
  type: FETCH_ROBOTS_REQUEST,
});

export const robotRequestSuccess = robots => ({
  type: FETCH_ROBOTS_SUCCESS,
  payload: robots,
});

export const robotRequestFailure = error => ({
  type: FETCH_ROBOTS_FAILURE,
  payload: error,
});

export const addToCart = name => ({
  type: ADD_TO_CART,
  name,
});

export const removeItem = name => ({
  type: REMOVE_ITEM,
  name,
});

export const addQuantity = name => ({
  type: ADD_QUANTITY,
  name,
});

export const subtractQuantity = name => ({
  type: SUB_QUANTITY,
  name,
});

export const filterRobots = category => ({
  type: FILTER_ROBOTS,
  payload: category,
});
