import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import NearbyReducer from './reducer_nearby';

const rootReducer = combineReducers({
  suggestions : SearchReducer,
  nearby : NearbyReducer
});

export default rootReducer;