import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import NearbyReducer from './reducer_nearby';
import PositionReducer from './reducer_position';
import ActiveStopReducer from './reducer_active_stop';

const rootReducer = combineReducers({
  suggestions : SearchReducer,
  nearby : NearbyReducer,
  position : PositionReducer,
  activeStop : ActiveStopReducer
});

export default rootReducer;