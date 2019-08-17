export const fetchPlaylists = () => (
    $.ajax({
        method: "GET",
        url: "api/playlists",
    })
)

export const fetchPlaylist = (id) => (
    $.ajax({
        method: "GET",
        url: `api/playlists/${id}`,
    })
)

export const createPlaylist = (playlist) => (
    $.ajax({
        method: "POST",
        url: `api/playlists`,
        data: {
            playlist
        }
    })
)

export const updatePlaylist = (playlist) => (
    $.ajax({
        method: "PATCH",
        url: `api/playlists/${playlist.id}`,
        data: {
            playlist
        }
    })
)

export const deletePlaylist = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/playlists/${id}`,
    })
)

export const addTrackToPlaylist = (playlistId, trackId) => (
    $.ajax({
        method: 'POST',
        url: `api/playlists/${playlistId}/tracks/${trackId}`,
        data: {
            playlist_item: {
                playlist_id: playlistId,
                track_id: trackId
            }
        }
    })
);

export const removeTrackFromPlaylist = (playlistItemId) => (
    $.ajax({
        url: `/api/playlist_items/${playlistItemId}`,
        method: 'DELETE',
        data: {
            id: playlistItemId
        }
    })
)