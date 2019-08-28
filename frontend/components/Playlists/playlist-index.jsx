import React from "react";
import { Link } from "react-router-dom";

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);

    // bind methods
    this.setArtwork = this.setArtwork.bind(this);
    this.createArtwork = this.createArtwork.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  handlePlay(playlist) {
    debugger;
    this.props.setCurrentSong(Object.values(playlist.playlist_tracks)[0]);
    this.props.setPlaying(true);
    this.props.setQueue(Object.values(playlist.playlist_tracks));
  }

  // For each playlist, store the album artwork (associated with each track) in an array
  setArtwork(playlist_tracks) {
    var artCollection = [];
    if (playlist_tracks != undefined) {
      artCollection = Object.values(playlist_tracks).map(track => {
        return track.album_art;
      });
    }
    return this.createArtwork(artCollection);
  }

  // set artwork for each playlist based on number of playlist tracks
  createArtwork(artCollection) {
    if (artCollection.length >= 1 && artCollection.length < 4) {
      return (
        <div className="playlist-art-container">
          <img src={artCollection[0]} />
        </div>
      );
    } else if (artCollection.length >= 4) {
      return artCollection.slice(0, 4).map(art => {
        return (
          <div key={art} className="playlist-idx-coverArt-item">
            <img src={art} />
          </div>
        );
      });
    } else {
      return (
        <div className="playlist-art-container">
          <img src="PlaylistArt-PlaceholderWithIcon.png" />
        </div>
      );
    }
  }

  render() {
    const { playlists } = this.props;
    let userPlaylists = Object.values(playlists).map(playlist => {
      return (
        <div key={playlist.title} className="album-artist-container">
          <div className="image-hover-container">
            {/* <Link to={`/collection/playlists/${playlist.id}`}> */}
            <div className="playlist-idx-cover-container">
              {this.setArtwork(playlist.playlist_tracks)}
            </div>
            <div className="Mike">
              <button
                id="Mike-button"
                onClick={() => this.handlePlay(playlist)}
              >
                <img id="Mike" src="play_white.png" />
              </button>
            </div>
            {/* </Link> */}
          </div>
          <Link id="grid-artist" to={`/collection/playlists/${playlist.id}`}>
            <div className="artist-container">{playlist.title}</div>
          </Link>
        </div>
      );
    });

    return <div className="playlist-index-container">{userPlaylists}</div>;
  }
}

export default PlaylistIndex;
