import React from "react";
import PlaylistShowItem from "./playlist-show-item";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      artworks: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.addToQueue = this.addToQueue.bind(this);
    this.setArtwork = this.setArtwork.bind(this);
    // this.handlePlay = this.handlePlay.bind(this);
    // this.getQueue = this.getQueue.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchPlaylist(this.props.match.params.playlistId)
      .then(() => this.setArtwork());
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.playlistId != this.props.match.params.playlistId
    ) {
      this.setState({ artworks: [] });
      this.props
        .fetchPlaylist(this.props.match.params.playlistId)
        .then(() => this.setArtwork());
    }
  }

  setArtwork() {
    if (Object.keys(this.props.playlist).includes("playlist_tracks")) {
      let tracks = this.props.playlist.playlist_tracks;
      let artCollection = Object.values(
        this.props.playlist.playlist_tracks
      ).map(track => {
        this.setState(prevState => {
          return { artworks: prevState.artworks.concat([track.album_art]) };
        });
      });
    }
  }

  getQueue(activeTrackIdx) {
    let tracks = Object.values(this.props.playlist.playlist_tracks);
    let queue = tracks
      .slice(activeTrackIdx)
      .concat(tracks.slice(0, activeTrackIdx));
    return queue;
  }

  addToQueue() {
    if (Object.keys(this.props.playlist.playlist_tracks).length > 0) {
      let tracks = this.props.playlist.playlist_tracks;
      this.props.setQueue(Object.values(tracks));
      this.props.setCurrentSong(tracks[1]);
    }
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.playlist.id);
    this.props.history.push("/collection/playlists/");
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
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
    let { menuVisible } = this.state;
    let { user } = this.props;
    if (!this.props.playlist) return "";
    let { playlist } = this.props || {};
    if (!playlist.creation_at) return null;
    let releaseYear = playlist.creation_at.slice(0, 4) || "";

    let { artworks } = this.state;
    if (artworks.length >= 1 && artworks.length < 4) {
      var playlistArt = (
        <div className="playlist-coverArt-single">
          <img src={artworks[0]} />
        </div>
      );
    } else if (artworks.length >= 4) {
      var playlistArt = artworks.slice(0, 4).map(art => {
        return (
          <div key={art} className="playlist-coverArt-item">
            <img src={art} />
          </div>
        );
      });
    } else {
      var playlistArt = (
        <div className="playlist-coverArt-single">
          <img src="PlaylistArt-Placeholder.png" />
        </div>
      );
    }

    if (playlist.playlist_tracks) {
      let tracks = Object.values(playlist.playlist_tracks) || {};
      trackCount = Object.keys(playlist.playlist_tracks).length || "";
      var playlistTracks = tracks.map((track, idx) => {
        return (
          <PlaylistShowItem
            key={track.title}
            track={track}
            playlist={playlist}
            setCurrentSong={this.props.setCurrentSong}
            toggleSong={this.props.toggleSong}
            queue={this.getQueue(idx)}
            setQueue={this.props.setQueue}
            setPlaying={this.props.setPlaying}
            openModal={this.props.openModal}
            closeModal={this.props.closeModal}
            receiveSongId={this.props.receiveSongId}
            removeTrackFromPlaylist={this.props.removeTrackFromPlaylist}
            fetchPlaylist={this.props.fetchPlaylist}
          />
        );
      });
    } else {
      var trackCount = 0;
      var tracks = [];
      var playlistTracks = "";
    }

    // let followButton;
    // if (!this.state.followed) {
    //   followButton = <button onClick={this.handleFollow}>FOLLOW</button>;
    // } else {
    //   followButton = <button onClick={this.handleUnfollow}>UNFOLLOW</button>;
    // }

    return (
      <div className="playlist-show-c1">
        <div className="playlist-show-c2">
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
                            <div className="playlist-cover-container">
                              {playlistArt}
                            </div>
                            {/* <div>
                              <img
                                className="album-show-cover-art"
                                src="PlaylistArt-Placeholder.png"
                              />
                            </div> */}
                          </div>
                          <button id="cover-art-play" />
                        </div>
                        <div className="album-title-container">
                          <span>{playlist.title}</span>
                        </div>
                        <div className="album-artist">{user}</div>
                      </div>
                    </div>
                    <div
                      className="album-show-left-play"
                      onClick={this.addToQueue}
                    >
                      Play
                    </div>
                    <div>
                      <div className="album-show-c3a-bottom">
                        <p>
                          {releaseYear} • {trackCount ? trackCount : 0}
                          {trackCount != 1 ? " SONGS" : " SONG"}
                        </p>
                        <div
                          className="context-menu-ellipses"
                          title="More"
                          onClick={this.toggleMenu}
                        >
                          ...
                        </div>
                        <div
                          id="context-menu"
                          className={
                            menuVisible
                              ? "context-menu-show"
                              : "context-menu-hidden"
                          }
                          onClick={this.handleDelete}
                        >
                          <div className="context-menu-item">Delete</div>
                        </div>
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

// TODO: Figure out displaying playlist tracks by position
