import React from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import Featured from './main-featured_container';
import Podcast from './main-podcast';
import Genres from './main-genres';
import Discover from './main-discover';
import PlaylistIndex from '../../components/Collection/playlist-index';
import LikedTrackIndex from '../../components/Collection/liked-tracks-index';
import { Route, Switch } from 'react-router-dom';


class Main extends React.Component {
        

    // Dynamically sets the background gradient of the page based on the current URL

    setNavLinks() {
        let browse = "/browse";
        let collection = "/collection";
        let location = this.props.history.location.pathname.includes("browse") ? browse : collection;
        debugger;
        switch (location) {
            case browse:
                return (<div className="main-nav">
                    <NavLink className="navlink" activeClassName="selected" to="/browse/featured">Albums</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/artists">Artists</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/genres">Genres</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/podcasts">Podcasts</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/discover">Discover</NavLink>
                </div>);
            case collection:
                return (<div className="main-nav">
                    <NavLink className="navlink" activeClassName="selected" to="/collection/playlists">Playlists</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/collection/tracks">Liked Songs</NavLink>
                </div>);
        }

    }

    setBackground() {
        let bgGradient;
        let featured = "/browse/featured";
        let artists = "/browse/artists"
        let playlist_index = "/collection/playlists";
        let liked_songs = "/collection/tracks";
        let podcasts = "/browse/podcasts";
        let genres = "/browse/genres";
        let discover = "/browse/discover";
        let main = "main";

        switch (this.props.history.location.pathname) {
            case featured:
                bgGradient = "main-featured";
                break;
            case artists:
                bgGradient = "main-artists";
                break;    
            case playlist_index:
                bgGradient = "main-playlists";
                break;
            case liked_songs:
                bgGradient = "main-liked-songs";
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
        let nav = this.setNavLinks();

        return (

            <div className={ gradient }>
                { nav }
                {/* <div className="main-nav">
                    <NavLink className="navlink" activeClassName="selected" to="/browse/featured">Albums</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/artists">Artists</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/genres">Genres</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/podcasts">Podcasts</NavLink>
                    <NavLink className="navlink" activeClassName="selected" to="/browse/discover">Discover</NavLink>
                </div> */}
                <div>
                    <Switch>
                        <ProtectedRoute exact path="/browse/featured" component={ Featured } />
                        <ProtectedRoute path="/browse/podcasts" component={ Podcast } />
                        <ProtectedRoute path="/browse/genres" component={ Genres } />
                        <ProtectedRoute exact path="/browse/discover" component={ Discover } />
                        <ProtectedRoute exact path="/collection/playlists" component={ PlaylistIndex } />
                        <ProtectedRoute exact path="/collection/tracks" component={ LikedTrackIndex } />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);