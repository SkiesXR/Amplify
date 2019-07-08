export const createPlaylistSong = (playlisttrack) => {
    return $.ajax({
        method: "POST",
        url: "/api/playlistsongs",
        data: { playlisttrack }
    });
};

export const deletePlaylistTrack = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/playlisttracks/${id}`
    });
};