import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form'; 

const msp = state => {
    return {
        errors: state.errors.session,
        formType: 'SignUp',
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(msp, mdp)(SignupForm);
