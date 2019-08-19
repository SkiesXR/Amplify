import {
    SET_BACKGROUND
} from '../actions/background_actions';

export default function backgroundReducer(state = "", action) {
    switch (action.type) {
        case SET_BACKGROUND:
            return action.color;
            // return Object.assign({}, state, action.color)
            break;
        default:
            return state;
    }
}