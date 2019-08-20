import { connect } from "react-redux";
import { fetchPlaylists } from "../../actions/playlist.actions";
import PlaylistIndex from "../Playlists/playlist-index";
import {
  setQueue,
  setCurrentSong,
  setPlaying
} from "../../actions/player_actions";

const msp = state => {
  return {
    // playlists: Object.values(state.entities.playlists)
    playlists: state.entities.playlists
  };
};

const mdp = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  setPlaying: playing => dispatch(setPlaying(playing)),
  setQueue: queue => dispatch(setQueue(queue)),
  setCurrentSong: song => dispatch(setCurrentSong(song))
});

export default connect(
  msp,
  mdp
)(PlaylistIndex);
