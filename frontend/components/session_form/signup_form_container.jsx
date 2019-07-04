import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form'; 

const msp = state => {
    return {
        errors_username: state.errors.session['username'],
        errors_password: state.errors.session['password'],
        errors_email: state.errors.session['email'],
        errors: state.errors.session,
        formType: 'SignUp',
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(msp, mdp)(SignupForm);
