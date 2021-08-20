import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import robotReducer from '../reducers/robotReducer';

const store = createStore(robotReducer, applyMiddleware(thunk));

export default store;
