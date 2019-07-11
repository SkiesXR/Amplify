import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import albums from './albums_reducer';
import artists from './artists_reducer';
import tracks from './tracks_reducer';
import genres from './genre_reducer';
import playlists from './playlist_reducer';
import playlists_errors from './playlist_errors_reducer';
import shows from './show_reducer';
import show_episodes from './show_episodes_reducer';


const rootReducer = combineReducers({
    entities,
    session,
    errors,
    // albums,
    // artists,
    // tracks,
    // genres,
    // playlists,
    // playlists_errors,
    // shows,
    // show_episodes
});

export default rootReducer;
