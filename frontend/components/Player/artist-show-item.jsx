import React from "react";
import { Link } from "react-router-dom";
import ArtistShowItemTrack from "./artist-show-item-track";

class ArtistShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteIcon: false,
      noteContainerClass: "tc-outer-top"
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.playNote = this.playNote.bind(this);
    this.musicNote = this.musicNote.bind(this);
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
      noteIcon: false,
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
    const playIcon = <img src={this.state.noteIcon}></img>;
    const { name } = this.props.artist || "";
    const album = this.props.album || "";
    const { album_art, title, release_date } = album || "";
    const release_year = release_date.slice(0, 4);
    const tracks = Object.values(album.tracks).map((track, idx) => {
      return (
        <ArtistShowItemTrack
          key={track.title}
          queue={this.getQueue(idx)}
          track={track}
          idx={idx}
          setCurrentSong={this.props.setCurrentSong}
          setPlaying={this.props.setPlaying}
          setQueue={this.props.setQueue}
        />
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
