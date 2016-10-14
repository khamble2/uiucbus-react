import { FETCH_POSITION } from '../actions/index';

export default function (state= null, action) {
    switch (action.type){
        case FETCH_POSITION:
            return action.payload;
    }
    return state;
}