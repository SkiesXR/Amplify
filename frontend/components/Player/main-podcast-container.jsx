import { connect } from 'react-redux';
import { fetchShows } from '../../actions/show_actions';
import MainPodcasts from '../Player/main-podcast';

const msp = state => {
    return {
        shows: Object.values(state.entities.shows),
    };
};

const mdp = dispatch => ({
    fetchShows: () => dispatch(fetchShows()),
});

export default connect(msp, mdp)(MainPodcasts);