import React from "react";
import PlaylistShowItem from "./playlist-show-item";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handlePlay = this.handlePlay.bind(this);
    // this.getQueue = this.getQueue.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  handleDelete() {
    this.props
      .deletePlaylist(this.props.playlist.id)
      .then(() => this.props.history.push("/collection/playlists/"));
  }

  //   handlePlay() {
  //     this.props.setCurrentSong(this.props.playlist.tracks);
  //     this.props.setQueue(this.props.queue);
  //     this.props.toggleSong();
  //   }

  //   getQueue(currSongIdx) {
  //     let { songs } = this.props;
  //     let queue = songs.slice(1);
  //     return queue;
  //   }

  render() {
    let { user } = this.props;
    if (!this.props.playlist) return "";
    let { playlist } = this.props || {};
    // if (!playlist) return null;
    let releaseYear = playlist.creation_at.slice(0, 4) || "";
    let tracks = Object.values(playlist.playlist_tracks) || {};
    const trackCount = Object.keys(playlist.playlist_tracks).length || "";
    let playlistTracks = tracks.map(track => {
      return (
        <PlaylistShowItem
          key={track.title}
          track={track}
          playlist={playlist}
          setCurrentSong={this.props.setCurrentSong}
          toggleSong={this.props.toggleSong}
          setQueue={this.props.setQueue}
        />
      );
    });

    // let followButton;
    // if (!this.state.followed) {
    //   followButton = <button onClick={this.handleFollow}>FOLLOW</button>;
    // } else {
    //   followButton = <button onClick={this.handleUnfollow}>UNFOLLOW</button>;
    // }

    // let deleteButton;
    // if (playlist.owned) {
    //   deleteButton = <button onClick={this.handleDelete}>DELETE</button>;
    // } else {
    //   deleteButton = null;

    return (
      <div className="album-show-c1">
        <div className="album-show-c2">
          <section id="album-show-section">
            <div className="fluid-container">
              <div className="fluid">
                <div className="album-show-c3a">
                  <div className="album-show-c3a-content">
                    <div className="album-show-c3a-content-header">
                      <div className="cover-art-info">
                        <div className="cover-art-shadow">
                          <div>
                            {/* <div className="cover-art-icon">
                                                            <img src="play_white.png"/>
                                                        </div> */}
                            <div>
                              <img
                                className="album-show-cover-art"
                                src="bts.jpg"
                              />
                            </div>
                          </div>
                          <button id="cover-art-play" />
                        </div>
                        <div className="album-title-container">
                          <span>{playlist.title}</span>
                        </div>
                        <div className="album-artist">{user}</div>
                      </div>
                    </div>
                    <div className="album-show-left-play">Play</div>
                    <div>
                      <div className="album-show-c3a-bottom">
                        <p>
                          {releaseYear} • {trackCount}
                          {trackCount > 1 ? " SONGS" : " SONG"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="album-show-c3b">{playlistTracks}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default PlaylistShow;
