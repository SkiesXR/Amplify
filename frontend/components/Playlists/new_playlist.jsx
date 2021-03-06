import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions";
import { createPlaylist } from "../../actions/playlist.actions";

class NewPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectToIndex = this.redirectToIndex.bind(this);
    this.state = { title: "" };
  }

  handleSubmit() {
    const { title } = this.state;
    const { closeModal } = this.props;
    if (title === "") return null;
    let playlist = this.state;
    this.setState({ title: "" });
    this.props
      .createPlaylist(playlist)
      .then(closeModal)
      .then(() => this.redirectToIndex());
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  redirectToIndex() {
    this.props.history.push(
      `/collection/playlists/${this.props.last_playlist.id}`
    );
  }

  render() {
    let { closeModal } = this.props;

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
        <h1 id="new-playlist-header">Create new playlist</h1>
        <div className="new-playlist-input-container">
          <div className="new-playlist-input-box">
            <div className="new-playlist-content-spacing">
              <h4 className="new-playlist-inputBox-label">Playlist Name</h4>
              <input
                type="text"
                className="new-playlist-inputBox-input"
                placeholder="New Playlist"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="modal-buttons">
          <button className="modal-button-cancel" onClick={closeModal}>
            CANCEL
          </button>
          <button className="modal-button-create" onClick={this.handleSubmit}>
            CREATE
          </button>
        </div>
      </div>
    );
  }
}

const msp = state => ({
  last_playlist: Object.values(state.entities.playlists).slice(-1)[0]
});

const mdp = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(
  connect(
    msp,
    mdp
  )(NewPlaylist)
);
