import React from 'react';
import { NavLink } from 'react-router-dom'


class Main extends React.Component {

    render() {

        return (
            <div className="main">
                <div className="main-nav">
                    <NavLink className="navlink" to="/browse/featured">Featured</NavLink>
                    <NavLink className="navlink" to="/browse/shows">Podcasts</NavLink>
                    <NavLink className="navlink" to="/browse/genres">Genres</NavLink>
                    <NavLink className="navlink" to="/browse/discover">Discover</NavLink>
                </div>
                <div className="header-grid">
                    <h1 className="main-h1">Made for User</h1>
                </div>
            </div>
        );
    }
}

export default Main;