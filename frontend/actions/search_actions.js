import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = ({artists, albums, genres, shows}) => ({
        type: RECEIVE_SEARCH_RESULTS,
        artists,
        albums,
        genres,
        shows
    });

export const fetchSearchResults = (input) => dispatch => (
    SearchAPIUtil.fetchSearchResults(input).then(
        results => dispatch(receiveSearchResults(results))
    )
);