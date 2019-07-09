import * as ShowEpisodeAPIUtil from '../util/show_episode_api_util';

export const RECEIVE_SHOW_EPISODES = "RECEIVE_SHOW_EPISODES";
export const RECEIVE_SHOW_EPISODE = "RECEIVE_SHOW_EPISODE";

export const recieveShowEpisodes= (show_episodes) => ({
    type: RECEIVE_SHOW_EPISODES,
    show_episodes
})

export const recieveShowEpisode = (show_episode) => ({
    type: RECEIVE_SHOW_EPISODE,
    show_episode
})

export const fetchShowEpisodes = () => dispatch => (
    ShowEpisodeAPIUtil.fetchShowEpisodes()
    .then(show_episodes => dispatch(recieveShowEpisodes(show_episodes)))
)

export const fetchShowEpisode = (id) => dispatch(
    ShowEpisodeAPIUtil.fetchShowEpisode(id)
    .then(show_episode => dispatch(recieveShowEpisode => (show_episode)))
)
