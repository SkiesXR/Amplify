import React from "react";
import ArtistShowItem from "./artist-show-item";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let artistId = this.props.match.params.artistId;
    this.props.fetchArtist(artistId);
  }

  render() {
    if (!this.props.artist) return "";
    let artist = this.props.artist || {};
    const { artist_photo, bio, name } = this.props.artist || "";
    const albums = artist.albums || {};

    // sort albums by release year
    let sortedAlbums = Object.values(albums).sort(function(x, y) {
      return x.release_date.slice(0, 4) - y.release_date.slice(0, 4);
    });

    let albumListLP = Object.values(sortedAlbums).map(album => {
      if (album.album_type === "Album") {
        return (
          <ArtistShowItem
            key={album.title}
            album={album}
            artist={artist}
            setCurrentSong={this.props.setCurrentSong}
            setPlaying={this.props.setPlaying}
            setQueue={this.props.setQueue}
          />
        );
      }
    });

    let albumListEP = Object.values(sortedAlbums).map(album => {
      if (album.album_type === "EP" || album.album_type === "Single") {
        return (
          <ArtistShowItem
            key={album.title}
            album={album}
            artist={artist}
            setCurrentSong={this.props.setCurrentSong}
            setPlaying={this.props.setPlaying}
            setQueue={this.props.setQueue}
          />
        );
      }
    });
    return (
      <div className="artist-show-c1">
        <div className="artist-show-header-container">
          <div
            id="artist-show-photo"
            style={{ backgroundImage: `url(${artist_photo})` }}
          />
        </div>
        <div className="artist-show-name">{name}</div>
        {/* <span className="artist-show-bio-header">Biography</span> */}
        {/* <div className="artist-show-bio">{bio}</div> */}
        <div className="artist-show-content">
          <h1
            className={
              albumListLP.every(e => e === undefined)
                ? "main-h1-dn"
                : "artist-show-h1"
            }
          >
            Albums
          </h1>
          <hr style={{ marginBottom: `40px`, opacity: `0.2` }}></hr>
          <div className="artist-show-container">{albumListLP}</div>
          <h1
            className={
              albumListEP.every(e => e === undefined)
                ? "main-h1-dn"
                : "artist-show-h1"
            }
          >
            EPs & Singles
          </h1>
          <hr style={{ marginBottom: `40px`, opacity: `0.2` }}></hr>
          <div className="as-ep-items">{albumListEP}</div>
        </div>
      </div>
    );
  }
}

export default ArtistShow;
