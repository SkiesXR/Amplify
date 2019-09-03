import React from "react";
import { Link } from "react-router-dom";

class ArtistShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteIcon: "music_note.png",
      noteContainerClass: "tc-outer-top"
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(track, queue) {
    debugger;
    this.props.setCurrentSong(track);
    this.props.setPlaying(true);
    this.props.setQueue(queue);
  }

  // Flip musical note icon to play icon once mouse enters track container
  playNote() {
    this.setState({
      noteIcon: "play.png",
      noteContainerClass: "tc-outer-top-2"
    });
  }

  // Flip play icon to musical note icon once mouse leaves track container
  musicNote() {
    this.setState({
      noteIcon: "music_note.png",
      noteContainerClass: "tc-outer-top"
    });
  }

  getQueue(activeTrackIdx) {
    let { album } = this.props;
    let queue = Object.values(album.tracks).slice(activeTrackIdx);
    debugger;
    return queue;
  }

  render() {
    if (!this.props.album) return "";
    const { name } = this.props.artist || "";
    const album = this.props.album || "";
    const { album_art, title, release_date } = album || "";
    const release_year = release_date.slice(0, 4);
    const tracks = Object.values(album.tracks).map((track, idx) => {
      const queue = () => this.getQueue(idx);
      debugger;
      return (
        <div className="album-show-track">
          <div className="album-show-track-info">
            <div
              className="as-track-idx"
              onClick={() => this.handlePlay(track, queue)}
            >
              {idx + 1}
            </div>
            <div className="as-track-title">{track.title}</div>
            <div className="as-track-length">{track.length}</div>
          </div>
          <div className="as-track-hr-container"></div>
        </div>
      );
    });

    return (
      <div style={{ width: `100%`, marginBottom: `40px` }}>
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
        <div className="artist-show-item-tracks">{tracks}</div>
      </div>
    );
  }
}

export default ArtistShowItem;
