import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist.actions';
import MainArtists from '../Player/main-artists';


const msp = state => {
    return {
        currentUser: state.entities.users[1],
        artists: Object.values(state.entities.artists),
    };
};

const mdp = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
});

export default connect(msp, mdp)(MainArtists);