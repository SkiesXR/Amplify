import { connect } from 'react-redux';
import AlbumShow from './album-show';
import { fetchAlbum } from '../../actions/album_actions';

const msp = (state, ownProps) => {
    // debugger;
    return {
        album: state.entities.albums[ownProps.match.params.albumId],
        tracks: state.entities.albums[ownProps.match.params.albumId].tracks
    }
};

const mdp = dispatch => ({
    fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(
    msp,
    // null,
    mdp
)(AlbumShow);