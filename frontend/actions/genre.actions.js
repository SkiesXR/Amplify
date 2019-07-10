import * as GenreAPIUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

export const receiveGenres = (genres) => ({
    type: RECEIVE_GENRES,
    genres
})

export const receiveGenre = (album) => ({
    type: RECEIVE_ALBUM,
    genre
})

export const fetchGenres = () => dispatch => (
    GenreAPIUtil.fetchGenres()
    .then(genres => dispatch(receiveGenres(genres)))
)

export const fetchGenre = (id) => dispatch => (
    GenreAPIUtil.fetchGenre(id)
    .then(genre => dispatch(receiveGenre(genre)))
)
