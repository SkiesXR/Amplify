import {
    RECEIVE_ARTISTS,
    RECEIVE_ARTIST,
} from '../actions/artist.actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ARTISTS:
            newState = Object.assign({}, state, action.artists)
            return newState;
        case RECEIVE_ARTIST:
            newState = Object.assign({}, state, {[action.track.id]: action.artist})
            return newState;
        default:
            return state;
    }
};
