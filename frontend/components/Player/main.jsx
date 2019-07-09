import React from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


class Main extends React.Component {

    render() {
        const { artists, currentUser } = this.props;
        return (
            <div className="main">
                <div className="main-nav">
                    <NavLink className="navlink" to="/browse/featured">Featured</NavLink>
                    <NavLink className="navlink" to="/browse/shows">Podcasts</NavLink>
                    <NavLink className="navlink" to="/browse/genres">Genres</NavLink>
                    <NavLink className="navlink" to="/browse/discover">Discover</NavLink>
                </div>
                <div className="header-grid">
                    <h1 className="main-h1">Future Home of Cool Sh*t</h1>
                </div>
                <div>
                    { artists }
                </div>
                <span>{ currentUser }</span>
            </div>
        );
    }
}

export default withRouter(Main);