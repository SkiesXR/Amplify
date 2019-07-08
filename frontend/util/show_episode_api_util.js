export const fetchShowEpisodes = () => (
    $.ajax({
        method: "GET",
        url: "api/show_episodes",
    })
)

export const fetchShowEpisode = (id) => (
    $.ajax({
        method: "GET",
        url: `api/show_episodes/${id}`,
    })
)