import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist.actions';
import PlaylistIndex from '../Playlists/playlist-index';

const msp = state => {
    return {
        playlists: Object.values(state.entities.playlists)
    };
};

const mdp = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists()),
});

export default connect(msp, mdp)(PlaylistIndex);