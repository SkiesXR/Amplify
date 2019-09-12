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
    this.redirectToShow = this.redirectToShow.bind(this);
    this.setArtwork = this.setArtwork.bind(this);
    this.createArtwork = this.createArtwork.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.playlists).length < 1) {
      this.props.fetchPlaylists();
    }
  }

  handleSubmit(playlist, trackId) {
    this.props.addTrackToPlaylist(playlist.id, trackId).then(() => {
      this.props.closeModal();
      this.redirectToShow(playlist.id);
    });
  }

  redirectToShow(playlistId) {
    if (this.props.history.location.pathname.includes("artists")) {
      return;
    } else {
      this.props.history.push(`/collection/playlists/${playlistId}`);
    }
  }

  // For each playlist, store the album artwork (associated with each track) in an array
  setArtwork(playlist_tracks) {
    var artCollection = [];
    if (playlist_tracks != undefined) {
      artCollection = Object.values(playlist_tracks).map(track => {
        return track.album_art;
      });
    }
    return this.createArtwork(artCollection);
  }

  // set artwork for each playlist based on number of playlist tracks
  createArtwork(artCollection) {
    if (artCollection.length >= 1 && artCollection.length < 4) {
      return (
        <div className="playlist-art-container">
          <img src={artCollection[0]} />
        </div>
      );
    } else if (artCollection.length >= 4) {
      return artCollection.slice(0, 4).map(art => {
        return (
          <div key={art} className="playlist-idx-coverArt-item">
            <img src={art} />
          </div>
        );
      });
    } else {
      return (
        <div className="playlist-art-container">
          <img src="PlaylistArt-PlaceholderWithIcon.png" />
        </div>
      );
    }
  }

  render() {
    let { closeModal } = this.props;
    if (!this.props.playlists) return null;
    let { playlists } = this.props;

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
                <div
                  key={playlist.id * Math.random()}
                  className="album-artist-container"
                >
                  <div
                    className="image-hover-container"
                    onClick={() =>
                      this.handleSubmit(playlist, this.props.trackId)
                    }
                  >
                    <img src="PlaylistArt-PlaceholderWithIcon.png" />
                    <div className="Mike">
                      <button id="Mike-button">
                        <svg width="51px" height="52px" viewBox="88 88 51 52">
                          <path
                            d="M98,88 C92.477,88 88,92.477 88,98 C88,103.523 92.477,108 98,108 C103.523,108 108,103.523 108,98 C108,92.476 103.523,88 98,88 L98,88 Z M105.001,98.999 L99.001,98.999 L99.001,104.999 L97.001,104.999 L97.001,98.999 L91.001,98.999 L91.001,96.999 L97.001,96.999 L97.001,90.999 L99.001,90.999 L99.001,96.999 L105.001,96.999 L105.001,98.999 L105.001,98.999 Z M112.751,95.345 C112.868,95.998 112.938,96.665 112.967,97.344 L137,92.234 L137,119.265 C135.349,117.221 132.826,115.909 130,115.909 C125.038,115.909 121,119.947 121,124.909 C121,129.872 125.038,133.909 130,133.909 C134.962,133.909 139,129.872 139,124.909 L139,89.765 L112.751,95.345 L112.751,95.345 Z M130,131.909 C126.14,131.909 123,128.769 123,124.909 C123,121.05 126.14,117.909 130,117.909 C133.86,117.909 137,121.05 137,124.909 C137,128.77 133.859,131.909 130,131.909 L130,131.909 Z M105,125.354 C103.348,123.311 100.826,121.999 98,121.999 C93.037,121.999 89,126.037 89,130.999 C89,135.961 93.037,139.999 98,139.999 C102.963,139.999 107,135.961 107,130.999 L107,109.972 C106.368,110.448 105.704,110.884 105,111.257 L105,125.354 L105,125.354 Z M98,137.999 C94.14,137.999 91,134.859 91,130.999 C91,127.139 94.14,123.999 98,123.999 C101.86,123.999 105,127.139 105,130.999 C105,134.858 101.859,137.999 98,137.999 L98,137.999 Z"
                            stroke="none"
                            fill="#FFFFFF"
                            fillRule="evenodd"
                          >
                            <title>Add to Playlist</title>
                          </path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="asp-artist">{playlist.title}</div>
                  <div className="asp-trackCount">
                    {playlist.trackCount}
                    {playlist.trackCount > 1 || playlist.trackCount === 0
                      ? " Songs"
                      : " Song"}
                  </div>
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
  playlists: state.entities.playlists,
  trackId: state.ui.modal.trackId
});

const mdp = dispatch => ({
  addTrackToPlaylist: (playlistId, trackId) =>
    dispatch(addTrackToPlaylist(playlistId, trackId)),
  closeModal: () => dispatch(closeModal()),
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default withRouter(
  connect(
    msp,
    mdp
  )(AddTrackToPlaylist)
);
