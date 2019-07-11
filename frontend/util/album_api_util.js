export const fetchAlbums = () => (
    $.ajax ({
        method: "GET",
        url: "api/albums",
    })
)

export const fetchAlbum = (id) => {
    // debugger;
    return $.ajax({
        method: "GET",
        url: `api/albums/${id}`,
    })
}