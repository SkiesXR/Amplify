import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'


class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }


    handleDemoUser(e) {
        const { history } = this.props;
        e.preventDefault();
        this.props.demoLogin({
            username: 'DemoUser',
            password: 'password'
        }).then(history.push('/browse/featured'))
    }

    render() {

        return(
            <div className="splash">
                <div className="header">
                    <div className="nav-flex-container">
                        <Link to="/"><img className="spotify-logo-splash" src="Amplify_White_Transparent.png" alt="Amplify" /></Link>
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
                    <button className="splash-demo-btn" onClick={ this.handleDemoUser }>Launch Web Player</button>
                </div>
                <footer>
                    <div className="splash-footer-content">
                        <div className="splash-footer-logo">
                            <img className="spotify-logo-splash-footer" src="Amplify_White_Transparent.png" alt="Amplify" />
                            <h4>A Spotify clone, made with love.</h4>
                        </div>
                        <div id="github">
                            <a target="_blank "href="https://github.com/SkiesXR/Amplify/wiki/"><img src="Octocat.png"/></a>
                        </div>
                        <div id="linkedin">
                            <a target="_blank " href="https://www.linkedin.com/in/phillipkrasnick"><img src="LI-In-Bug.png" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Splash;