import { merge} from 'lodash';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        // case RECEIVE_SEARCH_RESULTS:
        //     newState = Object.assign(
        //         {},
        //         {artists: action.artists},
        //         {albums: action.albums},
        //         {genres: action.genres},
        //         {shows: action.shows});
        //     return newState;
        case RECEIVE_SEARCH_RESULTS:
            newState = merge({}, JSON.parse(JSON.stringify(action)));
            delete newState.type;
            return newState;
        default:
            return state;
    }
}

export default searchReducer;