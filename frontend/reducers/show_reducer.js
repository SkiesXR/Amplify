import {
    RECEIVE_SHOWS,
    RECEIVE_SHOW,
} from '../actions/show_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_SHOWS:
            newState = Object.assign({}, state, action.shows)
            return newState;
        case RECEIVE_SHOW:
            newState = Object.assign({}, state, {
                [action.show.id]: action.show
            })
            return newState;
        default:
            return state;
    }
};