import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

// TODO: Fix Auth Routes

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    debugger;
    return <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/browse" />
            )
    )} />
        };



export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));