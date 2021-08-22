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

export const addToCart = id => ({
  type: ADD_TO_CART,
  id,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

export const addQuantity = id => ({
  type: ADD_QUANTITY,
  id,
});

export const subtractQuantity = id => ({
  type: SUB_QUANTITY,
  id,
});

export const filterRobots = material => ({
  type: FILTER_ROBOTS,
  payload: material,
});
