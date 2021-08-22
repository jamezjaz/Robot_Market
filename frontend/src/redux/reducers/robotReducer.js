import { ADD_TO_CART, FETCH_ROBOTS_FAILURE, FETCH_ROBOTS_REQUEST, FETCH_ROBOTS_SUCCESS, REMOVE_ITEM } from '../actions/actionTypes';

const initialState = {
  robots: {
    data: [],
  },
  // robots: [],
  loading: false,
  error: '',
  addedItems: [],
  total: 0,
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
        robots: {data: action.payload},
        // robots: action.payload,
        error: '',
      };
    case FETCH_ROBOTS_FAILURE:
      return {
        loading: false,
        robots: {},
        error: action.payload,
      };
    case ADD_TO_CART: {
      const addedItem = state.robots.data.find(item => item.id === action.id);
      // check if the action id exists in thr addedItems
      const existedItem = state.addedItems.find(item => action.id === item.id);
      
      if (existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      }
      addedItem.quantity = 1;
      // calculating the total
      const newTotal = state.total + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
    case REMOVE_ITEM: {
      const itemToRemove = state.addedItems.find(item => action.id === item.id);
      const newItems = state.addedItems.filter(item => action.id !== item.id);
      // calculating the total
      const newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
      // console.log(itemToRemove);
      return {
        ...state,
        addedItems: newItems,
        total: newTotal,
      };
    }
    default:
      return state;
  }
};

export default robotReducer;
