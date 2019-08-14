import {
    RECEIVE_PLAYLIST_ERRORS,
    CLEAR_PLAYLIST_ERRORS
} from '../actions/playlist.actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PLAYLIST_ERRORS:
            return action.errors;
            // return {};
        case CLEAR_PLAYLIST_ERRORS:
            return {};
        default:
            return state;
    }
};
