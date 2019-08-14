import { merge } from 'lodash';
import {
    SET_CURRENT_SONG,
    TOGGLE_SONG,
    SET_QUEUE,
    ADD_TO_QUEUE,
    TOGGLE_SHUFFLE
} from '../actions/player_actions';

const nullState = {
    currentSong: {
        audioUrl: 'https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Skylines.jpg'
    },
    playing: false,
    queue: [],
    shuffle: false,
    repeat: false
};


const PlayerReducer = (state = nullState, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case SET_CURRENT_SONG:
            newState.currentSong = action.song;
            return newState;
        case TOGGLE_SONG:
            if (newState.playing === true) {
                newState.playing = false;
            } else {
                newState.playing = true;
            }
            return newState;
        case SET_QUEUE:
            newState.queue = action.queue;
            return newState;
        case ADD_TO_QUEUE:
            newState.queue.push(action.song);
            return newState;
        default:
            return state;
    }
}

export default PlayerReducer;