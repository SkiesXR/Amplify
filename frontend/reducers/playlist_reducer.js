import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from "../actions/playlist.actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_PLAYLISTS:
      newState = Object.assign({}, state, action.playlists);
      return newState;
    case RECEIVE_PLAYLIST:
      newState = Object.assign({}, state, action.playlist);
      return newState;
    case REMOVE_PLAYLIST:
      newState = Object.assign({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};
