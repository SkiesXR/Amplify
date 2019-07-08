import React from 'react';
import { Link } from 'react-router-dom';


class LeftNav extends React.Component {

    render() {

        return (
            <div className="left-nav">
                <Link to="/browse/featured"><img id="amp-logo-left-nav" src="Amplify_White_Transparent.png"/></Link>
                <Link className="nav-link-container" to="/browse/featured">
                    <div className="nav-link-text-with-icon">
                        <img className="nav-link-icon" src="home.png"/>
                        <div className="nav-link-text">Home</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default LeftNav;