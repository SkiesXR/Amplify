import { connect } from 'react-redux';
import { fetchGenres } from '../../actions/genre.actions';
import MainGenres from '../Player/main-genres';

const msp = state => {
    return {
        genres: Object.values(state.entities.genres),
    };
};

const mdp = dispatch => ({
    fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(msp, mdp)(MainGenres);