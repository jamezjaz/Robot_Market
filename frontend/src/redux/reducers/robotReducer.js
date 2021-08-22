import {
  ADD_QUANTITY,
  ADD_TO_CART,
  FETCH_ROBOTS_FAILURE,
  FETCH_ROBOTS_REQUEST,
  FETCH_ROBOTS_SUCCESS,
  REMOVE_ITEM, SUB_QUANTITY,
} from '../actions/actionTypes';

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
      // console.log('Action ID:', action.id, 'Action Type:', action.type);
      const addedItem = state.robots.data.find(item => item.id === action.id);
      // check if the action id exists in the addedItems
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
    case ADD_QUANTITY: {
      const addedItem = state.robots.data.find(item => item.id === action.id);
      addedItem.quantity += 1;
      const newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    case SUB_QUANTITY: {
      const addedItem = state.robots.data.find(item => item.id === action.id);
      // if the quantity == 0 then, it should be removed
      if (addedItem.quantity === 1) {
        const newItems = state.addedItems.filter(item => item.id !== action.id);
        const newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: newItems,
          total: newTotal,
        };
      }
      addedItem.quantity -= 1;
      const newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
    default:
      return state;
  }
};

export default robotReducer;
