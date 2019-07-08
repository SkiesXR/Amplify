import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

export const recieveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const recieveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album
})

export const fetchAlbums = () => dispatch (
    AlbumAPIUtil.fetchAlbums()
        .then(albums => dispatch(receiveAlbums(albums)))
)

export const fetchAlbum = (id) => dispatch(
    AlbumAPIUtil.fetchAlbum(id)
    .then(album => dispatch(receiveAlbum(album)))
)

