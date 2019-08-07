import { connect } from 'react-redux';
import { receiveSearchResults } from '../../actions/search_actions';
import Search from '../Player/search';

const msp = state => {
    return {
        results: Object.values(state.search),
    };
};

const mdp = dispatch => ({
    receiveSearchResults: (results) => dispatch(receiveSearchResults(results)),
});

export default connect(msp, mdp)(Search);