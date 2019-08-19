import {
    combineReducers
} from 'redux';
import modal from './modal_reducer';
import nowPlaying from './player_reducer';
import background from './background_reducer';

export default combineReducers({
    modal,
    nowPlaying,
    background
});