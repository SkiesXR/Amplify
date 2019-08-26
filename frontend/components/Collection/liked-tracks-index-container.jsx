import { connect } from "react-redux";
import { fetchLikedTracks } from "../../actions/track_actions";
import {
  setCurrentSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";
import LikeIndex from "./liked-tracks-index";

const msp = state => {
  return {
    likes: state.tracks
  };
};

const mdp = dispatch => ({
  fetchSearchResults: results => dispatch(fetchSearchResults(results)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  setQueue: queue => dispatch(setQueue(queue)),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  setPlaying: playing => dispatch(setPlaying(playing)),
  fetchLikedTracks: () => dispatch(fetchLikedTracks())
});

export default connect(
  msp,
  mdp
)(LikeIndex);
