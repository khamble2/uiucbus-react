import { FETCH_NEARBY } from '../actions/index';

export default function (state= null, action) {
    switch (action.type){
        case FETCH_NEARBY:
            return action.payload.data.stops;
    }
    return state;
}