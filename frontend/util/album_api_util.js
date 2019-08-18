export const fetchAlbums = () => (
    $.ajax({
        method: "GET",
        url: "api/albums",
    })
)

export const fetchAlbum = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/albums/${id}`,
    })
}