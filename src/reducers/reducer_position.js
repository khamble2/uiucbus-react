import { FETCH_POSITION } from '../actions/index';

export default function (state= null, action) {
    switch (action.type){
        case FETCH_POSITION:
            console.log("REDUCE LOCATION");
            console.log(action.payload);
            return action.payload;
    }
    return state;
}