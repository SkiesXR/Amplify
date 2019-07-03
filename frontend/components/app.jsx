import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginForm from './session_form/login_form';
import SignupForm from './session_form/signup_form';


const App = () => (
    <div>
        {/* <header>
            <h1>Amplify</h1>
            <GreetingContainer />
        </header> */}
        {/* <Route exact path="/" component={ SplashContainer } /> */}
        <Route path="/login" component={ LoginFormContainer } />
        <Route path="/signup" component={ SignupFormContainer } />
    </div>
);

export default App;