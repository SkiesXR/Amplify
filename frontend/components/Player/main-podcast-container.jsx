import { connect } from "react-redux";
import { fetchShows } from "../../actions/show_actions";
import MainPodcasts from "../Player/main-podcast";
import {
  setCurrentSong,
  setPlaying,
  setQueue
} from "../../actions/player_actions";

const msp = state => {
  return {
    shows: Object.values(state.entities.shows)
  };
};

const mdp = dispatch => ({
  fetchShows: () => dispatch(fetchShows()),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  setPlaying: playing => dispatch(setPlaying(playing)),
  setQueue: queue => dispatch(setQueue(queue))
});

export default connect(
  msp,
  mdp
)(MainPodcasts);
