import { connect } from "react-redux";
import { Player } from "./player";
import {
  toggleSong,
  setCurrentSong,
  setQueue
} from "../../actions/player_actions";

const msp = state => {
  return {
    currentSong: state.ui.nowPlaying.currentSong,
    playing: state.ui.nowPlaying.playing,
    repeat: state.ui.nowPlaying.repeat,
    shuffle: state.ui.nowPlaying.shuffle
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
