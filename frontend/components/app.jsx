import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from './splash';
import {AuthRoute} from '../util/route_util';
import Browse from './browse';
import {
    Route,
    Switch,
} from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/login" component={ LoginFormContainer } />
            <AuthRoute path="/signup" component={ SignupFormContainer } />
            <Route path="/browse" component={ Browse } />
            <AuthRoute path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;