import { FETCH_ROBOTS_FAILURE, FETCH_ROBOTS_REQUEST, FETCH_ROBOTS_SUCCESS } from './actions/actionTypes';

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
