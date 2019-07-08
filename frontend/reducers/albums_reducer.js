import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM,
} from '../actions/album_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ALBUMS:
            newState = Object.assign({}, state, action.albums)
            return newState;
        case RECEIVE_ALBUM:
            newState = Object.assign({}, state, {[action.album.id]: action.album})
            return newState;
        default:
            return state;
    }
};
