import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashContainer from './session_form/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseFeatured from './browse_featured';
import {
    Route,
    Switch,
} from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={ LoginFormContainer } />
            <AuthRoute exact path="/signup" component={ SignupFormContainer } />
            <AuthRoute exact path="/collection" component={ SignupFormContainer } />
            <ProtectedRoute exact path="/browse/featured" component={ BrowseFeatured } />
            <AuthRoute exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;