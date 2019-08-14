import { merge} from 'lodash';
import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            newState = merge({}, JSON.parse(JSON.stringify(action)));
            delete newState.type;
            return newState;
        case CLEAR_SEARCH_RESULTS:
            return {};
        default:
            return state;
    }
}

export default searchReducer;