import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from '../splash';
import { withRouter } from 'react-router-dom'

const msp = state => {
    return {
        test_prop: "test"
    };
};

const mdp = dispatch => {
    return {
        demoLogin: (user) => dispatch(login(user)),
    };
};

export default withRouter(connect(msp, mdp)(Splash));
