import { connect } from 'react-redux';
import AlbumShow from './album-show';
import { fetchAlbum } from '../../actions/album_actions';
import { setCurrentSong, toggleSong, setQueue } from '../../actions/player_actions';

const msp = (state, ownProps) => {
    // debugger;
    return {
        album: state.entities.albums[ownProps.match.params.albumId] || {},
        tracks: (state.entities.albums[ownProps.match.params.albumId] || {}).tracks,
        currentSong: state.ui.Player.currentSong
    }
};

const mdp = dispatch => ({
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
    toggleSong: () => (dispatch(toggleSong())),
    setQueue: (queue) => (dispatch(setQueue(queue)))
});

export default connect(
    msp,
    mdp
)(AlbumShow);