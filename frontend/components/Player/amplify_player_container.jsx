import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist.actions';
import AmplifyPlayer from '../Player/amplify_player';
import { logout } from '../../actions/session_actions';


const msp = state => {
    return {
        currentUser: state.entities.users[1],
        artists: Object.values(state.entities.artists)
    };
};

const mdp = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(AmplifyPlayer);