import { connect } from 'react-redux';
import { fetchSearchResults, clearSearchResults } from '../../actions/search_actions';
import Search from '../Player/search';

const msp = state => {
    return {
        results: state.search
    };
};

const mdp = dispatch => ({
    fetchSearchResults: (results) => dispatch(fetchSearchResults(results)),
    clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(msp, mdp)(Search);