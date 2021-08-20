import { createStore } from 'redux';
import robotReducer from '../reducers/robotReducer';

const store = createStore(robotReducer);

export default store;
