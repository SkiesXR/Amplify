import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashContainer from './session_form/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AmplifyPlayerContainer from './Player/amplify_player_container';
import PodcastPlayer from './Player/podcast_player';
import GenrePlayer from './Player/genre_player';
import DiscoverPlayer from './Player/discover_player';
import {
    Route,
    Switch,
} from 'react-router-dom';
import genre_player from './Player/genre_player';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={ LoginFormContainer } />
            <AuthRoute exact path="/signup" component={ SignupFormContainer } />
            <AuthRoute exact path="/collection" component={ SignupFormContainer } />
            <ProtectedRoute exact path="/browse/featured" component={ AmplifyPlayerContainer } />
            <ProtectedRoute exact path="/browse/shows" component={ PodcastPlayer } />
            <ProtectedRoute exact path="/browse/genres" component={ GenrePlayer } />
            <ProtectedRoute exact path="/browse/discover" component={ DiscoverPlayer } />
            <Route exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;