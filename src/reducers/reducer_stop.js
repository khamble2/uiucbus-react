import { FETCH_STOP } from '../actions/index';

export default function (state= null, action) {
    switch (action.type){
        case FETCH_STOP:
            return action.payload.data;
    }
    return state;
}