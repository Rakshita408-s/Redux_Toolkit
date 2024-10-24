
import { combineReducers } from 'redux';
import counterReducer from './CartSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
