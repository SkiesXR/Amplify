export const fetchTracks = () => (
    $.ajax({
        method: "GET",
        url: "api/tracks",
    })
)

export const fetchTrack = (id) => (
    $.ajax({
        method: "GET",
        url: `api/tracks/${id}`,
    })
)

export const fetchLikedTracks = () => (
    $.ajax({
        method: "GET",
        url: "api/likes"
    })
)

export const saveTrack = (userId, trackId) => {
    return $.ajax({
        method: "POST",
        url: "api/likes",
        data: {
            like: {
                user_id: userId,
                track_id: trackId
            }
        }
    })
}

export const unsaveTrack = (likedTrackId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/likes/${likedTrackId}`,
        data: {
            data: {
                id: likedTrackId
            }
        }
    })
}