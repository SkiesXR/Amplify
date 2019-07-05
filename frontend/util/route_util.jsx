import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// TODO: Fix Auth Routes
const Auth = ({ component: Component, path, logged_in, exact }) => (
    
    <Route path={path} exact={exact} render={(props) => (
        !logged_in ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) }; 
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));