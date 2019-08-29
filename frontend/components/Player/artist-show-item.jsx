import React from "react";
import { Link } from "react-router-dom";

class ArtistShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    this.props.setCurrentSong(Object.values(this.props.album.tracks)[0]);
    this.props.setPlaying(true);
    this.props.setQueue(Object.values(this.props.album.tracks));
  }

  render() {
    if (!this.props.album) return "";
    const { name } = this.props.artist || "";
    const album = this.props.album || "";
    const { album_art, title, release_date } = album || "";
    const release_year = release_date.slice(0, 4);

    return (
      <div className="artist-show-item-container">
        <div className="artist-show-album-container">
          <div className="artist-show-image-hover-container">
            <img src={album_art} />
            <div className="Mike">
              <button id="Mike-button" onClick={this.handlePlay}>
                <img id="Mike" src="play_white.png" />
              </button>
            </div>
          </div>
        </div>
        <div className="artist-release-container">
          <div className="artist-show-releaseDate">{release_year}</div>
          <div className="artist-show-title">{title}</div>
        </div>
      </div>
    );
  }
}

export default ArtistShowItem;
