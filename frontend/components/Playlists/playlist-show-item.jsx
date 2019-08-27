import React from "react";
import { withRouter } from "react-router-dom";

class PlaylistShowItem extends React.Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handlePlay() {
    this.props.setCurrentSong(this.props.track);
    this.props.setPlaying(true);
    this.props.setQueue(this.props.queue);
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

  handleSubmit(id) {
    this.toggleMenu();
    debugger;
    this.props
      .removeTrackFromPlaylist(this.props.track.playlist_item_id)
      .then(() => this.props.fetchPlaylist(this.props.playlist.id));
    // .then(() => this.redirectToShow(this.props.playlist.id));
  }

  redirectToShow(playlistId) {
    this.props.history.push(`/collection/playlists/${playlistId}`);
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  }

  render() {
    let { menuVisible } = this.state;
    const { length, title, artist, album } = this.props.track;
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
          <div className="tc-artist">{artist}</div>
        </div>
        <div className="tc-context-menu" title="More">
          <div className="ellipsis" onClick={this.toggleMenu}>
            ...
          </div>
          <div className={menuVisible ? "cm-show" : "cm-hidden"}>
            <div className="cm-item">
              <div onClick={() => this.handleSubmit(this.props.track.id)}>
                Remove Song from Playlist
              </div>
            </div>
          </div>
        </div>
        <div className="tc-duration">
          <div className="tc-duration-top">{duration}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistShowItem);
