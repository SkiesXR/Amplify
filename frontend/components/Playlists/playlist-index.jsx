import React from "react";
import { Link } from "react-router-dom";

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const { playlists } = this.props;
    let userPlaylists = playlists.map(playlist => {
      return (
        <div className="album-artist-container">
          <div className="image-hover-container">
            <Link to="">
              <img src="bts.jpg" />
              <div className="Mike">
                <button id="Mike-button">
                  <img id="Mike" src="play_white.png" />
                </button>
              </div>
            </Link>
          </div>
          <div className="artist-container">
            <Link id="grid-artist" to="">
              {playlist.title}
            </Link>
          </div>
        </div>
      );
    });

    return <div className="playlist-index-container">{userPlaylists}</div>;
  }
}

export default PlaylistIndex;
