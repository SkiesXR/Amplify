import {
    RECEIVE_PLAYLISTS,
    RECEIVE_PLAYLIST,
    DELETE_PLAYLIST,
} from '../actions/playlist.actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            newState = Object.assign({}, state, action.playlists)
            return newState;
        case RECEIVE_PLAYLIST:
            // newState = Object.assign({}, state, {
            //     [action.playlist.id]: action.playlist
            // })
            // return newState;
            return merge ({}, state, action.playlist);
        case DELETE_PLAYLIST:
            newState = Object.assign({}, state)
            delete newState[action.playlistId]
            return newState;
        default:
            return state;
    }
};