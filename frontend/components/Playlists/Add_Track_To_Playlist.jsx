import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import {
  addTrackToPlaylist,
  fetchPlaylists
} from "../../actions/playlist.actions";

class AddTrackToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.redirectToIndex = this.redirectToIndex.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.playlists).length < 1) {
      this.props.fetchPlaylists();
    }
  }

  handleSubmit() {
    // let playlist = this.state;
    // this.props
    //   .createPlaylist(playlist)
    //   .then(this.props.closeModal)
    //   .then(() => this.redirectToIndex());
  }

  //   handleChange(e) {
  //     this.setState({ title: e.target.value });
  //   }

  //   redirectToIndex() {
  //     this.props.history.push("/collection/playlists");
  //   }

  render() {
    let { closeModal } = this.props;
    if (!this.props.playlists) return null;
    let { playlists } = this.props;
    debugger;

    return (
      <div className="modal-container">
        <button className="btn-transparent" onClick={closeModal}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <h1 id="new-playlist-header">Add Song to Playlist</h1>
        <div className="asp-playlistIndexContainer">
          <div className="results">
            {Object.values(playlists).map(playlist => {
              return (
                <div className="album-artist-container">
                  <div className="image-hover-container">
                    <img src="bts.jpg" />
                    <div className="Mike">
                      <button id="Mike-button">
                        <img id="Mike" src="play_white.png" />
                      </button>
                    </div>
                  </div>
                  <div className="artist-container">{playlist.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const msp = state => ({
  playlists: state.entities.playlists
});

const mdp = dispatch => ({
  addTrackToPlaylist: track => dispatch(addTrackToPlaylist(track)),
  closeModal: () => dispatch(closeModal()),
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default withRouter(
  connect(
    msp,
    mdp
  )(AddTrackToPlaylist)
);
