import * as ShowAPIUtil from '../util/show_api_util';

export const RECEIVE_SHOWS = "RECEIVE_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";

export const recieveShows = (shows) => ({
    type: RECEIVE_SHOWS,
    shows
})

export const recieveShow = (show) => ({
    type: RECEIVE_SHOW,
    show
})

export const fetchShows = () => dispatch => (
    ShowAPIUtil.fetchShows()
    .then(shows => dispatch(recieveShows(shows)))
)

export const fetchShow = (id) => dispatch => (
    ShowAPIUtil.fetchShow(id)
    .then(show => dispatch(recieveShow(show)))
)
