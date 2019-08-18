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
        // audio_file: 'https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Music/skylines.mp3',
        audio_file: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBYZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--430f954954a5f8f21786858caf8eecf88803fd40/afp%20-%20skylines%20-%20skylines.mp3",
        album_art: 'https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Skylines.jpg',
        artist: "Animalfirepower",
        title: "Skylines",
        length: "03:09"
    },
    playing: false,
    queue: [{
        album_art: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--612fe03e9c4a4443377d64e2f75d815cd0ae9122/afp%20-%20skylines.jpg",
        album_id: 7,
        artist: "Animalfirepower",
        artist_id: 2,
        audio_file: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBYZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--430f954954a5f8f21786858caf8eecf88803fd40/afp%20-%20skylines%20-%20skylines.mp3",
        id: 58,
        length: "03:09",
        title: "Skylines"
    }],
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