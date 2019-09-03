import React from "react";

class ArtistShowItemTrack extends React.Component {
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
    this.props.setCurrentSong(track);
    this.props.setPlaying(true);
    this.props.setQueue(queue);
  }

  // Flip musical note icon to play icon once mouse enters track container
  playNote() {
    this.setState({
      noteIcon: "play_white.png",
      noteContainerClass: "as-outer-top-2"
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
    const { track, queue, idx } = this.props;
    const playIcon = (
      <img
        src={this.state.noteIcon}
        onClick={() => this.handlePlay(track, queue)}
      ></img>
    );

    return (
      <div className="album-show-track">
        <div
          className="album-show-track-info"
          onMouseEnter={this.playNote}
          onMouseLeave={this.musicNote}
        >
          <div
            className={
              this.state.noteIcon === "play_white.png"
                ? this.state.noteContainerClass
                : "as-track-idx"
            }
            onClick={() => this.handlePlay(track, queue)}
          >
            {this.state.noteIcon ? playIcon : idx + 1}
          </div>
          <div className="as-track-title">{track.title}</div>
          <div className="as-track-length">{track.length}</div>
        </div>
        <div className="as-track-hr-container"></div>
      </div>
    );
  }
}

export default ArtistShowItemTrack;
