import { connect } from "react-redux";
import { Player } from "./player";
import {
  toggleSong,
  setCurrentSong,
  setQueue
} from "../../actions/player_actions";

const msp = state => {
  return {
    nowPlaying: state.ui.nowPlaying
  };
};

const mdp = dispatch => ({
  toggleSong: () => dispatch(toggleSong()),
  setCurrentSong: track => dispath(setCurrentSong(track)),
  setQueue: queue => dispatch(setQueue(queue))
});

export default connect(
  msp,
  mdp
)(Player);
