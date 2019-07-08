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
                <Link className="nav-link-container" to="/search">
                    <div className="nav-link-text-with-icon">
                        <img className="nav-link-icon" src="search.png"/>
                        <div className="nav-link-text">Search</div>
                    </div>
                </Link>
                <Link className="nav-link-container" to="/collection/playlists">
                    <div className="nav-link-text-with-icon">
                        <img className="nav-link-icon" src="Library.svg" />
                        <div className="nav-link-text">Your Library</div>
                    </div>
                </Link>
                <div className="RootList">
                    <h2 id="left-nav-h2">Playlists</h2>
                    <button id="create-playlist-button">Create Playlist</button>
                </div>
            </div>
        );
    }
}

export default LeftNav;