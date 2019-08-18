import { connect } from "react-redux";
import Player from "./player";
import {
  toggleSong,
  setCurrentSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";

const msp = state => {
  return {
    currentSong: state.ui.nowPlaying.currentSong,
    playing: state.ui.nowPlaying.playing,
    repeat: state.ui.nowPlaying.repeat,
    shuffle: state.ui.nowPlaying.shuffle,
    queue: state.ui.nowPlaying.queue
  };
};

const mdp = dispatch => ({
  toggleSong: () => dispatch(toggleSong()),
  setCurrentSong: track => dispatch(setCurrentSong(track)),
  setPlaying: playing => dispatch(setPlaying(playing)),
  setQueue: queue => dispatch(setQueue(queue))
});

export default connect(
  msp,
  mdp
)(Player);
