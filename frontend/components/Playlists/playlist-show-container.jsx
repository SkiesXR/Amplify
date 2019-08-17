import { connect } from "react-redux";
import {
  fetchPlaylist,
  deletePlaylist,
  removeTrackFromPlaylist
} from "../../actions/playlist.actions";
import {
  setCurrentSong,
  toggleSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";
import PlaylistShow from "../Playlists/playlist-show";
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    user: Object.values(state.entities.users)[0].username
  };
};

const mdp = dispatch => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  deletePlaylist: id => dispatch(deletePlaylist(id)),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  toggleSong: () => dispatch(toggleSong()),
  setQueue: queue => dispatch(setQueue(queue)),
  setPlaying: playing => dispatch(setPlaying(playing)),
  removeTrackFromPlaylist: (id, data) =>
    dispatch(removeTrackFromPlaylist(id, data))
});

export default connect(
  msp,
  mdp
)(PlaylistShow);
