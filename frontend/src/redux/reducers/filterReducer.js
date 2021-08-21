import { FILTER_ROBOTS } from '../actions/actionTypes';

const initialFilter = null;

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case FILTER_ROBOTS:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;