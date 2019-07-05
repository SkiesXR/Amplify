import React from 'react';
import { withRouter } from 'react-router-dom';


class Splash extends React.Component {

    render() {

        return(
            <div className="splash">
                <div className="nav">
                    <img className="spotify-logo-splash" src="SpotifyWhite.png" alt="Amplify" />
                </div>
                <div className="splash-bg">
                    <div className="hero-home-bg-cover">
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default withRouter(Splash);