import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist.actions';
import { fetchAlbums } from '../../actions/album_actions';
import MainFeatured from '../Player/main-featured';


const msp = state => {
    // debugger;
    return {
        currentUser: state.entities.users[1],
        artists: Object.values(state.entities.artists),
        albums: Object.values(state.entities.albums)
    };
};

const mdp = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(msp, mdp)(MainFeatured);