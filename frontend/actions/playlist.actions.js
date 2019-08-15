import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";
export const CLEAR_PLAYLIST_ERRORS = "CLEAR_PLAYLIST_ERRORS";

// action creators

export const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

export const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
})

export const removePlaylist = (playlist) => ({
    type: REMOVE_PLAYLIST,
    playlistId: playlist.id
})

export const receivePlaylistErrors = (errors) => ({
    type: RECEIVE_PLAYLIST_ERRORS,
    errors
})

export const clearErrors = (errors) => ({
    type: CLEAR_PLAYLIST_ERRORS,
})

// thunk action creators

export const fetchPlaylists = () => dispatch => (
    PlaylistAPIUtil.fetchPlaylists()
    .then(playlists => dispatch(receivePlaylists(playlists)))
)

export const fetchPlaylist = (id) => dispatch => (
    PlaylistAPIUtil.fetchPlaylist(id)
    .then(playlist => dispatch(receivePlaylist(playlist)))
)

export const deletePlaylist = (id) => dispatch => (
    PlaylistAPIUtil.deletePlaylist(id)
    .then(playlist => dispatch(removePlaylist(playlist)))
)

export const createPlaylist = (playlist) => dispatch => (
    PlaylistAPIUtil.createPlaylist(playlist)
    .then(playlist => {
        dispatch(receivePlaylist(playlist))
    }));

export const updatePlaylist = (playlist) => dispatch => (
    PlaylistAPIUtil.updatePlaylist(playlist)
    .then(playlist => {
            dispatch(receivePlaylist(playlist))
        },
        err => dispatch(receivePlaylistErrors(err.responseJSON)))
);