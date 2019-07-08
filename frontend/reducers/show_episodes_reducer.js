import {
    RECEIVE_SHOW_EPISODES,
    RECEIVE_SHOW_EPISODE,
} from '../actions/show_episode_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_SHOW_EPISODES:
            newState = Object.assign({}, state, action.show_episodes)
            return newState;
        case RECEIVE_SHOW_EPISODE:
            newState = Object.assign({}, state, {
                [action.show_episode.id]: action.show_episode
            })
            return newState;
        default:
            return state;
    }
};