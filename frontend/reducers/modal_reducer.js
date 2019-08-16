import {
    OPEN_MODAL,
    CLOSE_MODAL,
    RECEIVE_SONG_ID
} from '../actions/modal_actions';

export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal
        case CLOSE_MODAL:
            return null;
        case RECEIVE_SONG_ID:
            return Object.assign({}, state, action.id)
        default:
            return state;
    }
}