import { connect } from "react-redux";
import Player from "./player";
import {
  toggleSong,
  setCurrentSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";
import {
  saveTrack,
  unsaveTrack,
  fetchLikedTracks
} from "../../actions/track_actions";

const msp = state => {
  return {
    currentSong: state.ui.nowPlaying.currentSong,
    playing: state.ui.nowPlaying.playing,
    repeat: state.ui.nowPlaying.repeat,
    shuffle: state.ui.nowPlaying.shuffle,
    queue: state.ui.nowPlaying.queue,
    userId: Object.values(state.entities.users)[0].id,
    tracks: Object.values(state.entities.tracks)
  };
};

const mdp = dispatch => ({
  toggleSong: () => dispatch(toggleSong()),
  setCurrentSong: track => dispatch(setCurrentSong(track)),
  setPlaying: playing => dispatch(setPlaying(playing)),
  setQueue: queue => dispatch(setQueue(queue)),
  saveTrack: (userId, trackId) => dispatch(saveTrack(userId, trackId)),
  unsaveTrack: likedTrackId => dispatch(unsaveTrack(likedTrackId)),
  fetchLikedTracks: () => dispatch(fetchLikedTracks())
});

export default connect(
  msp,
  mdp
)(Player);
