import React from "react";
import AlbumShowItem from "./album-show-item";
import { Link } from "react-router-dom";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);

    // bind methods
    this.addToQueue = this.addToQueue.bind(this);
    this.analyzeColor = this.analyzeColor.bind(this);
  }

  componentDidMount() {
    let albumId = this.props.match.params.albumId;

    this.props.fetchAlbum(albumId);
    // .then(() => this.analyzeColor());
    // .then(() => this.props.setBackground(albumId));
  }

  // Color Thief Test
  analyzeColor() {
    $(document).ready(function() {
      const colorThief = new ColorThief();
      const result = colorThief.getColor(document.getElementById("playTest"));
      console.log(result);
    });
  }

  addToQueue() {
    let tracks = this.props.album.tracks;
    this.props.setQueue(Object.values(tracks));
    this.props.setCurrentSong(tracks[1]);
  }

  getQueue(activeTrackIdx) {
    let { tracks } = this.props.album;
    let queue = Object.values(tracks)
      .slice(activeTrackIdx)
      .concat(Object.values(tracks).slice(0, activeTrackIdx));
    return queue;
  }

  render() {
    if (!this.props.album) return "";
    if (!this.props.album.release_date) return "";
    let tracks = this.props.tracks || this.props.album.tracks;
    const releaseYear =
      parseInt(this.props.album.release_date.slice(0, 4), 10) || "";
    const trackCount = Object.keys(this.props.album.tracks).length || "";
    let albumTracks = Object.values(tracks).map((track, idx) => (
      <AlbumShowItem
        key={track.title}
        track={track}
        album={this.props.album}
        queue={this.getQueue(idx)}
        setCurrentSong={this.props.setCurrentSong}
        toggleSong={this.props.toggleSong}
        setQueue={this.props.setQueue}
        setPlaying={this.props.setPlaying}
        openModal={this.props.openModal}
        closeModal={this.props.closeModal}
        receiveSongId={this.props.receiveSongId}
      />
    ));
    return (
      <div>
        <div className="album-show-c1">
          <div className="album-show-c0"></div>
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
                              <div>
                                <img
                                  id="album-show-art"
                                  className="album-show-cover-art"
                                  src={this.props.album.album_art}
                                  crossOrigin="Anonymous"
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
                          <p>
                            {releaseYear} • {trackCount}{" "}
                            {trackCount > 1 ? "SONGS" : "SONG"}
                          </p>
                          {/* <img id="playTest" src="Octocat.png" />
                        <div onClick={this.analyzeColor}>Analyze Color</div> */}
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
      </div>
    );
  }
}

export default AlbumShow;
