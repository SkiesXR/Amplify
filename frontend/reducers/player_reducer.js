import {
    merge
} from 'lodash';
import {
    SET_CURRENT_SONG,
    TOGGLE_SONG,
    SET_QUEUE,
    ADD_TO_QUEUE,
    TOGGLE_SHUFFLE,
    SET_PLAYING
} from '../actions/player_actions';

const nullState = {
    currentSong: {
        audio_file: 'https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/skylines.mp3',
        album_art: 'https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Skylines.jpg',
        artist: "Animalfirepower",
        title: "Skylines",
        length: "03:09"
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
        case SET_PLAYING:
            newState.playing = action.playing
            return newState;
        default:
            return state;
    }
}

export default PlayerReducer;