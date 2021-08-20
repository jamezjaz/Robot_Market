import { FETCH_ROBOTS_FAILURE, FETCH_ROBOTS_REQUEST, FETCH_ROBOTS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  robots: {
    data: [],
  },
  loading: false,
  error: '',
};

const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROBOTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ROBOTS_SUCCESS:
      return {
        loading: false,
        robots: action.payload,
        error: '',
      };
    case FETCH_ROBOTS_FAILURE:
      return {
        loading: false,
        robots: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default robotReducer;
