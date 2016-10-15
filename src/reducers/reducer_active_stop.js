import { SET_ACTIVE_STOP } from '../actions/index';

export default function (state= null, action) {
    switch (action.type){
        case SET_ACTIVE_STOP:
            return action.payload;
    }
    return state;
}