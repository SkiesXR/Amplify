import React from "react";
import {
  fetchLikedTracks,
  saveTrack,
  unsaveTrack
} from "../../actions/track_actions";
import { connect } from "react-redux";

class ArtistShowItemTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteIcon: false,
      noteContainerClass: "tc-outer-top",
      loveButton: "love.png",
      loveId: "love"
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.playNote = this.playNote.bind(this);
    this.musicNote = this.musicNote.bind(this);
    this.toggleLove = this.toggleLove.bind(this);
  }

  componentDidMount() {
    const { likes } = this.props;
    let trackId = this.props.track.id;
    this.props.fetchLikedTracks().then(() =>
      Object.values(this.props.likes).some(track => {
        return track.id === trackId;
      })
        ? this.setState({
            loveButton: "love_filled.png",
            loveId: "love-green"
          })
        : this.setState({
            loveButton: "love.png",
            loveId: "love"
          })
    );
  }

  componentDidUpdate(prevProps) {
    let { likes } = this.props;
    let trackId = this.props.track.id;
    if (prevProps.likes != likes) {
      Object.values(likes).some(track => {
        return track.id === trackId;
      })
        ? this.setState({
            loveButton: "love_filled.png",
            loveId: "love-green"
          })
        : this.setState({
            loveButton: "love.png",
            loveId: "love"
          });
    }
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

  toggleLove() {
    switch (this.state.loveButton) {
      case "love.png":
        const { userId, track, saveTrack, unsaveTrack } = this.props;
        const trackId = track.id;
        this.setState({
          loveButton: "love_filled.png",
          loveId: "love-green"
        });
        saveTrack(userId, trackId).then(() => this.props.fetchLikedTracks());
        break;
      case "love_filled.png":
        let tracks = Object.values(this.props.likes);
        let i;
        for (i = 0; i < tracks.length; i++) {
          if (tracks[i].id === this.props.track.id) {
            return this.props.unsaveTrack(tracks[i].likeId).then(() =>
              this.props.fetchLikedTracks().then(() =>
                this.setState({
                  loveButton: "love.png",
                  loveId: "love"
                })
              )
            );
          }
        }
        break;
    }
  }

  render() {
    const { track, queue, idx } = this.props;
    const playIcon = <img src={this.state.noteIcon}></img>;

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
          <div className="as-love-container">
            <img
              id={this.state.loveId}
              src={this.state.loveButton}
              alt="love"
              onClick={this.toggleLove}
            />
          </div>
          <div className="as-track-title">{track.title}</div>
          <div className="as-track-length">{track.length}</div>
        </div>
        <div className="as-track-hr-container"></div>
      </div>
    );
  }
}

const msp = state => {
  return {
    likes: state.entities.tracks,
    userId: Object.values(state.entities.users)[0].id
  };
};

const mdp = dispatch => ({
  fetchLikedTracks: () => dispatch(fetchLikedTracks()),
  saveTrack: (userId, trackId) => dispatch(saveTrack(userId, trackId)),
  unsaveTrack: likedTrackId => dispatch(unsaveTrack(likedTrackId))
});

export default connect(
  msp,
  mdp
)(ArtistShowItemTrack);
