import React from "react";

class PodcastShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteIcon: "music_note.png",
      noteContainerClass: "tc-outer-top"
    };

    // Bind some methods
    this.handlePlay = this.handlePlay.bind(this);
    this.playNote = this.playNote.bind(this);
    this.podcastNote = this.podcastNote.bind(this);
  }

  handlePlay() {
    debugger;
    // this.props.setCurrentSong(this.props.track);
    // this.props.setPlaying(true);
    // this.props.setQueue(this.props.queue);
  }

  // Flip musical note icon to play icon once mouse enters track container
  playNote() {
    this.setState({
      noteIcon: "play.png",
      noteContainerClass: "tc-outer-top-2"
    });
  }

  // Flip play icon to musical note icon once mouse leaves track container
  podcastNote() {
    this.setState({
      noteIcon: "podcast-icon.png",
      noteContainerClass: "tc-outer-top"
    });
  }

  render() {
    const { noteContainerClass } = this.state;
    const { title, author, length } = this.props.episode || "";

    return (
      <div
        onMouseEnter={this.playNote}
        onMouseLeave={this.podcastNote}
        className="track-container"
      >
        <div className="tc-outer">
          <div className={noteContainerClass}>
            <img
              id="tc-note"
              src={this.state.noteIcon}
              onClick={this.handlePlay}
            />
          </div>
        </div>
        <div className="tc-title-artist">
          <div className="tc-title">{title}</div>
          <div className="tc-artist">{author}</div>
        </div>
        <div className="tc-duration">
          <div className="tc-duration-top">{length}</div>
        </div>
      </div>
    );
  }
}

export default PodcastShowItem;
