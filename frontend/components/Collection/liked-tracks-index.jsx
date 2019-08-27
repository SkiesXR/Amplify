import React from "react";
import LikedTrackItem from "./liked-track-item";

class LikedTrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLikedTracks();
  }

  addToQueue() {
    let tracks = Object.values(this.props.likes);
    this.props.setQueue(tracks);
    this.props.setCurrentSong(tracks[0]);
  }

  getQueue(activeTrackIdx) {
    let { likes } = this.props;
    let queue = Object.values(likes)
      .slice(activeTrackIdx)
      .concat(Object.values(likes).slice(0, activeTrackIdx));
    return queue;
  }

  render() {
    let { likes = {} } = this.props;
    let likedTracks = Object.values(likes).map((track, idx) => (
      <LikedTrackItem
        key={track.title}
        track={track}
        album={track.album}
        queue={this.getQueue(idx)}
        setCurrentSong={this.props.setCurrentSong}
        setQueue={this.props.setQueue}
        setPlaying={this.props.setPlaying}
        receiveSongId={this.props.receiveSongId}
      />
    ));
    return <div className="content-spacing">{likedTracks}</div>;
  }
}

export default LikedTrackIndex;
