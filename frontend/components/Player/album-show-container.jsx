import { connect } from 'react-redux';
import AlbumShow from './album-show';
import { fetchAlbum } from '../../actions/album_actions';

const msp = (state, ownProps) => {
    return {album: state.entities.albums[ownProps.match.params.albumId]}
    };

const mdp = dispatch => ({
    fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(
    msp,
    mdp
)(AlbumShow);