import React from "react";
import { Link } from "react-router-dom";

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.setLoaded = this.setLoaded.bind(this);
  }

  setLoaded(boolean) {
    this.setState({
      loaded: true
    });
  }

  handlePlay() {
    this.props.setCurrentSong(Object.values(this.props.album.tracks)[0]);
    this.props.setPlaying(true);
    this.props.setQueue(Object.values(this.props.album.tracks));
  }

  render() {
    const { id, album_art, title, artist, artist_id } = this.props.album;
    const gridItem = (
      <div className="album-artist-container">
        <div className="image-hover-container">
          <div>
            {!this.state.loaded ? (
              <img src="AlbumArt-PlaceholderWithIcon.png" />
            ) : null}
          </div>
          <img src={album_art} />
          <div className="Mike">
            <button id="Mike-button" onClick={this.handlePlay}>
              <img
                id="Mike"
                src="play_white.png"
                style={!this.state.loaded ? { visibility: "hidden" } : {}}
                onLoad={() => this.setLoaded(true)}
              />
            </button>
          </div>
        </div>

        <div className="title-container">
          <Link id="grid-title" to={`/albums/${id}`}>
            {title}
          </Link>
        </div>

        <div className="artist-container">
          <Link id="grid-artist" to={`/artists/${artist_id}`}>
            {artist}
          </Link>
        </div>
      </div>
    );

    return gridItem;
  }
}

export default GridItem;
