import {
    RECEIVE_TRACKS,
    RECEIVE_TRACK,
    RECEIVE_LIKED_TRACKS
} from '../actions/track_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_TRACKS:
            newState = Object.assign({}, state, action.tracks)
            return newState;
        case RECEIVE_LIKED_TRACKS:
            newState = Object.assign({}, state, action.tracks)
            return newState;
        case RECEIVE_TRACK:
            newState = Object.assign({}, state, {
                [action.track.id]: action.track
            })
            return newState;
        default:
            return state;
    }
};