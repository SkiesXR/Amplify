import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import artistsReducer from './artists_reducer';
import albumsReducer from './albums_reducer';
import tracksReducer from './tracks_reducer';
import genreReducer from './genre_reducer';
import playlistReducer from './playlist_reducer';
import showReducer from './show_reducer';
import showEpisodesReducer from './show_episodes_reducer';
import playlistErrorsReducer from './playlist_errors_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer,
    genres: genreReducer,
    playlists: playlistReducer,
    shows: showReducer,
    showEpisodes: showEpisodesReducer,
    playlistErrors: playlistErrorsReducer,
});

export default entitiesReducer;
