import React from "react";
import AlbumShowItem from "./album-show-item";
import { Link } from "react-router-dom";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    // bind methods
    this.addToQueue = this.addToQueue.bind(this);
  }

  componentDidMount() {
    let albumId = this.props.match.params.albumId;
    this.props.fetchAlbum(albumId);
  }

  addToQueue() {
    let tracks = this.props.album.tracks;
    this.props.setQueue(tracks);
  }

  render() {
    if (!this.props.album) return "";
    if (!this.props.album.release_date) return "";
    // if (!this.props.tracks) return this.props.album.tracks;
    let tracks = this.props.tracks || this.props.album.tracks;
    // const { tracks = {} } = this.props.album;
    const releaseYear =
      parseInt(this.props.album.release_date.slice(0, 4), 10) || "";
    const trackCount = Object.keys(this.props.album.tracks).length || "";
    let albumTracks = Object.values(tracks).map(track => {
      return (
        <AlbumShowItem
          key={track.title}
          track={track}
          album={this.props.album}
          setCurrentSong={this.props.setCurrentSong}
          toggleSong={this.props.toggleSong}
          setQueue={this.props.setQueue}
          setPlaying={this.props.setPlaying}
          openModal={this.props.openModal}
        />
      );
    });
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
                                src={this.props.album.album_art}
                              />
                            </div>
                          </div>
                          <button id="cover-art-play" />
                        </div>
                        <div className="album-title-container">
                          <span>{this.props.album.title}</span>
                        </div>
                        <div className="album-artist">
                          <Link to={`/artists/${this.props.album.artist_id}`}>
                            {this.props.album.artist_name}
                          </Link>
                        </div>
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
                        {/* <p>{ releaseYear } • { trackCount } SONGS</p> */}
                        <p>
                          {releaseYear} • {trackCount}{" "}
                          {trackCount > 1 ? "SONGS" : "SONG"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="album-show-c3b">{albumTracks}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AlbumShow;

// TODO: White play icon (button, plays music) on album art hovers
