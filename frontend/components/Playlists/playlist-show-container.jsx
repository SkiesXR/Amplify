import { connect } from "react-redux";
import { fetchPlaylist, removePlaylist } from "../../actions/playlist.actions";
import {
  setCurrentSong,
  toggleSong,
  setQueue
} from "../../actions/player_actions";
import PlaylistShow from "../Playlists/playlist-show";

const msp = (state, ownProps) => {
  return {
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    user: Object.values(state.entities.users)[0].username
  };
};

const mdp = dispatch => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  removePlaylist: id => dispatch(removePlaylist(id)),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  toggleSong: () => dispatch(toggleSong()),
  setQueue: queue => dispatch(setQueue(queue))
});

export default connect(
  msp,
  mdp
)(PlaylistShow);
