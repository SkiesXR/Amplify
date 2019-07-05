import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'


class Splash extends React.Component {

    render() {

        return(
            <div className="splash">
                <div className="header">
                    <div className="nav-flex-container">
                        <Link to="/"><img className="spotify-logo-splash" src="SpotifyWhite.png" alt="Amplify" /></Link>
                        <ul className="nav  ">
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </ul>
                    </div>
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