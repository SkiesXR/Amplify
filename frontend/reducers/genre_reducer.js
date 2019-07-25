import {
    RECEIVE_GENRES,
    RECEIVE_GENRE,
} from '../actions/genre.actions';

export default (state = {}, action) => {
    // debugger;
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_GENRES:
            newState = Object.assign({}, state, action.genres)
            return newState;
        case RECEIVE_GENRE:
            // newState = Object.assign({}, state, action.genre)
            return Object.assign({}, state, {[action.genre.id]: action.genre});
            // return newState;
            // newState = Object.assign({}, state, {
            //     [action.genre.id]: action.genre
            // })
            // newState = Object.assign({}, state);
            // newState = action.genre;
            // return newState;
            // return action.genre;
        default:
            return state;
    }
};