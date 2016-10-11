import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';

const rootReducer = combineReducers({
  suggestions : SearchReducer
});

export default rootReducer;