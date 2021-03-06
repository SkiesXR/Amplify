import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session[0],   
        formType: 'login',
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(msp, mdp)(LoginForm);
