import { combineReducers } from 'redux';
import modal from './modal_reducer';
import PlayerReducer from './player_reducer';

export default combineReducers({
    modal,
    nowPlaying: PlayerReducer
});
