import {
    RECEIVE_GENRES,
    RECEIVE_GENRE,
} from '../actions/genre.actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_GENRES:
            newState = Object.assign({}, state, action.genres)
            return newState;
        case RECEIVE_GENRE:
            newState = Object.assign({}, state, {
                [action.genre.id]: action.genre
            })
            return newState;
        default:
            return state;
    }
};