import { connect } from "react-redux";
import AlbumShow from "./album-show";
import { fetchAlbum } from "../../actions/album_actions";
import {
  setCurrentSong,
  toggleSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";
import { openModal, receiveSongId } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  // debugger;
  return {
    album: state.entities.albums[ownProps.match.params.albumId] || {},
    tracks: (state.entities.albums[ownProps.match.params.albumId] || {}).tracks,
    currentSong: state.ui.nowPlaying.currentSong
  };
};

const mdp = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  toggleSong: () => dispatch(toggleSong()),
  setPlaying: playing => dispatch(setPlaying(playing)),
  setQueue: queue => dispatch(setQueue(queue)),
  openModal: id => dispatch(openModal({ modal: "addTrackToPlaylist" })),
  receiveSongId: id => dispatch(receiveSongId(id))
});

export default connect(
  msp,
  mdp
)(AlbumShow);
