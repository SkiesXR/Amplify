import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/search_actions';
import Search from '../Player/search';

const msp = state => {
    return {
        results: Object.values(state.search),
    };
};

const mdp = dispatch => ({
    fetchSearchResults: (results) => dispatch(fetchSearchResults(results)),
});

export default connect(msp, mdp)(Search);