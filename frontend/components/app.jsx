import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from './splash';
import AuthRoute from '../util/route_util';
import Browse from './browse';
import {
    Route,
    Switch,
} from 'react-router-dom';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/login" component={ LoginFormContainer } />
            <Route exact path="/signup" component={ SignupFormContainer } />
            <Route exact path="/browse" component={ Browse } />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;