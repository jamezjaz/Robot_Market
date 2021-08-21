import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import robotReducer from './robotReducer';

const rootReducer = combineReducers({
  robot: robotReducer,
  filter: filterReducer,
});

export default rootReducer;
