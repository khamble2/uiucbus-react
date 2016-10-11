import { FETCH_SUGGESTIONS } from '../actions/index';

export default function (state= null, action) {
    switch (action.type){
        case FETCH_SUGGESTIONS:
            return action.payload.data;
    }
    return state;
}