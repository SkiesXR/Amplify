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
                <div className="splash-main">
                    <h1 className="hero-h1">Music for everyone.</h1>
                    <h4>Millions of songs. No credit card needed.</h4>
                    <Link to="/browse" className="demo-link"><button className="splash-demo-btn">Demo Login</button></Link>
                </div>
                <footer></footer>
            </div>
        );
    }
}

export default withRouter(Splash);