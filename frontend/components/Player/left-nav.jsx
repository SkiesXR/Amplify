import React from "react";
import { NavLink, Link } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions.js";
import { fetchPlaylists } from "../../actions/playlist.actions";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    if (this.props.playlists.length === 0) this.props.fetchPlaylists();
  }

  logoutUser() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    if (!this.props.playlists) return null;
    let { playlists = {} } = this.props;
    let playlistNames = playlists.map(playlist => {
      return (
        <NavLink
          key={playlist.id * Math.random()}
          activeClassName="nav-link-container-active"
          to={`/collection/playlists/${playlist.id}`}
        >
          <div key={playlist.title} className="playlist-item">
            {playlist.title}
          </div>
        </NavLink>
      );
    });

    return (
      <div className="left-nav">
        <Link to="/browse/featured">
          <img id="amp-logo-left-nav" src="Amplify_White_Transparent.png" />
        </Link>
        <NavLink
          className="nav-link-container"
          activeClassName="nav-link-container-active"
          to="/browse/featured"
        >
          <div className="nav-link-text-with-icon">
            <img className="nav-link-icon" src="home.png" />
            <div className="nav-link-text">Home</div>
          </div>
        </NavLink>
        <NavLink
          className="nav-link-container"
          activeClassName="nav-link-container-active"
          to="/search"
        >
          <div className="nav-link-text-with-icon">
            <img className="nav-link-icon" src="search.png" />
            <div className="nav-link-text">Search</div>
          </div>
        </NavLink>
        <NavLink
          className="nav-link-container"
          activeClassName="nav-link-container-active"
          to="/collection/playlists"
        >
          <div className="nav-link-text-with-icon">
            <svg
              viewBox="0 0 512 512"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
                fill="white"
              />
            </svg>
            <div className="nav-link-text">Your Library</div>
          </div>
        </NavLink>
        <div className="RootList">
          <h2 id="left-nav-h2">Playlists</h2>
          <div className="nav-link-text-with-icon-p">
            <img className="nav-link-icon-plus" src="addplaylist.png" />
            <div className="nav-link-text-cp" onClick={this.props.openModal}>
              Create Playlist
            </div>
          </div>
          <div className="playlist-items">{playlistNames}</div>
          <Link
            className="nav-link-text-logout"
            onClick={() => this.logoutUser()}
            to="/"
          >
            Logout
          </Link>
          <div className="nav-link-user">
            <img className="nav-link-profile" src="profile_photo.jpg" />
            <div className="nav-link-text-profile">
              {this.props.currentUser}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const msp = state => ({
  playlists: Object.values(state.entities.playlists)
});

const mdp = dispatch => ({
  openModal: () => dispatch(openModal({ modal: "new_playlist" })),
  logout: () => dispatch(logout()),
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

// export default LeftNav;
export default withRouter(
  connect(
    msp,
    mdp
  )(LeftNav)
);

// DEBUG: Logout Button not actually logging out user
// DEBUG: Playlist links don't load playlist info
