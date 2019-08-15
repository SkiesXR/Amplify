import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashContainer from "./session_form/splash_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import AmplifyPlayerContainer from "./Player/amplify_player_container";
import { Route, Switch } from "react-router-dom";
import Modal from "./Modal/modal";

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/collection" component={AmplifyPlayerContainer} />
        <ProtectedRoute path="/podcasts" component={AmplifyPlayerContainer} />
        <ProtectedRoute path="/albums" component={AmplifyPlayerContainer} />
        <ProtectedRoute path="/artists" component={AmplifyPlayerContainer} />
        <ProtectedRoute path="/genres" component={AmplifyPlayerContainer} />
        <ProtectedRoute path="/browse" component={AmplifyPlayerContainer} />
        <ProtectedRoute path="/search" component={AmplifyPlayerContainer} />
        <AuthRoute exact path="/" component={SplashContainer} />
      </Switch>
    </div>
  );
};

export default App;
