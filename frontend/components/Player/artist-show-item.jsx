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
    const { album_art, title } = album || "";

    return (
      <div className="album-artist-container">
        <div className="image-hover-container">
          <img src={album_art} />
          <div className="Mike">
            <button id="Mike-button" onClick={this.handlePlay}>
              <img id="Mike" src="play_white.png" />
            </button>
          </div>
        </div>

        <div className="title-container">
          <Link id="grid-title" to={`/albums/${album.id}`}>
            {title}
          </Link>
        </div>

        <div className="artist-container">
          <Link id="grid-artist" to="">
            {name}
          </Link>
        </div>
      </div>
    );
  }
}

export default ArtistShowItem;
