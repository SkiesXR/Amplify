import { connect } from "react-redux";
import {
  fetchSearchResults,
  clearSearchResults
} from "../../actions/search_actions";
import Search from "../Player/search";
import {
  setCurrentSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";

const msp = state => {
  return {
    results: state.search
  };
};

const mdp = dispatch => ({
  fetchSearchResults: results => dispatch(fetchSearchResults(results)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  setQueue: queue => dispatch(setQueue(queue)),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  setPlaying: playing => dispatch(setPlaying(playing))
});

export default connect(
  msp,
  mdp
)(Search);
