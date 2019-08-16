import { connect } from "react-redux";
import PodcastShow from "./podcast-show";
import { fetchShow } from "../../actions/show_actions";
import {
  setCurrentSong,
  toggleSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";

const msp = (state, ownProps) => {
  return {
    podcast: state.entities.shows[ownProps.match.params.podcastId] || {},
    episodes: state.entities.showEpisodes
  };
};

const mdp = dispatch => ({
  fetchShow: id => dispatch(fetchShow(id)),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  toggleSong: () => dispatch(toggleSong()),
  setPlaying: playing => dispatch(setPlaying(playing)),
  setQueue: queue => dispatch(setQueue(queue))
});

export default connect(
  msp,
  mdp
)(PodcastShow);
