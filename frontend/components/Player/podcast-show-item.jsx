import React from "react";

class PodcastShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteIcon: "podcast-icon.png",
      noteContainerClass: "tc-outer-top"
    };

    // Bind some methods
    this.handlePlay = this.handlePlay.bind(this);
    this.playNote = this.playNote.bind(this);
    this.podcastNote = this.podcastNote.bind(this);
    this.pauseNote = this.pauseNote.bind(this);
    // this.handleTrackIcon = this.handleTrackIcon.bind(this);
  }

  handlePlay() {
    if (this.state.noteIcon === "pause-green.png") {
      this.props.setPlaying(false);
      this.playNote();
    } else {
      this.props.setCurrentSong(this.props.episode);
      this.props.setPlaying(true);
      this.props.setQueue(this.props.queue);
    }
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

  pauseNote() {
    this.setState({
      noteIcon: "pause-green.png",
      noteConainerClass: "tc-outer-top-2"
    });
  }

  render() {
    const { noteContainerClass, noteIcon } = this.state;
    const { title, length } = this.props.episode || "";
    const { author } = this.props.podcast;
    const { playing } = this.props;

    return (
      <div
        onMouseEnter={
          this.props.episode.audio_file === this.props.currentSong.audio_file &&
          playing === true
            ? this.pauseNote
            : this.playNote
        }
        onMouseLeave={this.podcastNote}
        className="track-container"
      >
        <div className="tc-outer">
          <div className={noteContainerClass}>
            <img id="tc-note" src={noteIcon} onClick={this.handlePlay} />
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
