import {
    setBackground
} from '../actions/background_actions';

export default function backgroundReducer(state = "", action) {
    switch (action.type) {
        case setBackground:
            return action.color;
            break;
        default:
            return state;
    }
}