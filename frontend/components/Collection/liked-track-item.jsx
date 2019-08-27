import React from "react";

class LikedTrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteIcon: "music_note.png",
      noteContainerClass: "tc-outer-top",
      menuVisible: false
    };

    // Bind some methods!
    this.playNote = this.playNote.bind(this);
    this.musicNote = this.musicNote.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    // this.handleModal = this.handleModal.bind(this);
  }

  handlePlay() {
    this.props.setCurrentSong(this.props.track);
    this.props.setPlaying(true);
    this.props.setQueue(this.props.queue);
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
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

  render() {
    const { menuVisible } = this.state;
    const { length, title, artist } = this.props.track;
    const { album } = this.props;
    let noteContainerClass = this.state.noteContainerClass;
    let min = length.slice(0, 2);
    let sec = length.slice(3);
    let duration = `${min}:${sec}`;

    return (
      <div
        onMouseEnter={this.playNote}
        onMouseLeave={this.musicNote}
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
          <div className="tc-outer-bottom">
            <div className="tc-artist">{artist} </div>•
            <div className="tc-artist"> {album}</div>
          </div>
        </div>
        <div className="tc-context-menu" title="Add Song to Playlist">
          <div className="ellipsis" onClick={this.toggleMenu}>
            {/* <img
              id="atp"
              src="plus.png"
              onClick={() => this.handleModal(this.props.track.id)}
            /> */}
            ...
          </div>
          <div className={menuVisible ? "cm-show" : "cm-hidden"}>
            {/* <div className="cm-item" onClick={this.props.openModal}> */}
            {/* <div
              className="cm-item"
              onClick={() => this.handleModal(this.props.track.id)}
            > */}
            <div onClick={this.toggleMenu}>Remove Song from Playlist</div>
            {/* </div> */}
          </div>
        </div>
        <div className="tc-duration">
          <div className="tc-duration-top">{duration}</div>
        </div>
      </div>
    );
  }
}

export default LikedTrackItem;
