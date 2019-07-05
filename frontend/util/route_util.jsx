import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

// TODO: Fix Auth Routes
const Auth = ({ component: Component, path, logged_in, exact }) => (
    
    <Route path={path} exact={exact} render={(props) => (
        !logged_in ? (
            <Component {...props} />
        ) : (
                <Redirect to="/browse" />
            )
    )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) }; 
};

export const AuthRoute = connect(mapStateToProps, null)(Auth);