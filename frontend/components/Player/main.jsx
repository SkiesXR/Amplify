import React from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import Featured from './main-featured_container';
import Podcast from './main-podcast';
import Genres from './main-genres';
import Discover from './main-discover';
import { Route, Switch } from 'react-router-dom';


class Main extends React.Component {
        

    // Dynamically sets the background gradient of the page based on the current URL
    setBackground() {
        let bgGradient;
        let featured = "/browse/featured";
        let podcasts = "/browse/podcasts";
        let genres = "/browse/genres";
        let discover = "/browse/discover";
        let main = "main";

        switch (this.props.history.location.pathname) {
            case featured:
                bgGradient = "main-featured";
                break;
            case podcasts:
                bgGradient = "main-podcast";
                break;
            case genres:
                bgGradient = "main-genre";
                break;
            case discover:
                bgGradient = "main-discover";
                break;
            default:
                bgGradient = main;
                break;
        }
        return bgGradient;
    }
    

    render() {

        let gradient = this.setBackground();

        return (

            <div className={ gradient }>
                <div className="main-nav">
                    <NavLink className="navlink" activeClassName="selected" to="/browse/featured">Featured</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/podcasts">Podcasts</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/genres">Genres</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/discover">Discover</NavLink>
                </div>
                <div>
                    <Switch>
                        <ProtectedRoute exact path="/browse/featured" component={ Featured } />
                        <ProtectedRoute path="/browse/podcasts" component={ Podcast } />
                        <ProtectedRoute path="/browse/genres" component={ Genres } />
                        <ProtectedRoute exact path="/browse/discover" component={ Discover } />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);