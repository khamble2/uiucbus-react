import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import NearbyReducer from './reducer_nearby';
import PositionReducer from './reducer_position';

const rootReducer = combineReducers({
  suggestions : SearchReducer,
  nearby : NearbyReducer,
  position : PositionReducer
});

export default rootReducer;