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
                    debugger;
            newState = Object.assign({}, state, {[action.album.album.id]: action.album.album})
            return newState;
        default:
            return state;
    }
};
