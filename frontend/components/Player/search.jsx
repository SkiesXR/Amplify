import React from "react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.displayArtists = this.displayArtists.bind(this);
    this.displayAlbums = this.displayAlbums.bind(this);
    this.displayGenres = this.displayGenres.bind(this);
    this.displayPodcasts = this.displayPodcasts.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSearchResults();
  }

  update(field) {
    let that = this;
    return function(e) {
      that.setState({
        [field]: e.currentTarget.value
      });
      that.props.fetchSearchResults(e.currentTarget.value);
    };
  }

  handlePlay(album) {
    debugger;
    this.props.setCurrentSong(Object.values(album.tracks)[0]);
    this.props.setPlaying(true);
    this.props.setQueue(Object.values(album.tracks));
  }

  displayArtists(artistResults) {
    let artists = artistResults[1];
    return (
      <div>
        <h1 className="main-h1">Artists</h1>
        <div className="results">
          {artists.map(artist => {
            return (
              <div className="album-artist-container">
                <div className="artist-image-hover-container">
                  <img src={artist.artist_photo} />
                </div>
                <div className="title-container">
                  <Link id="grid-title" to={`/artists/${artist.id}`}>
                    {artist.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  displayAlbums(albumResults) {
    let albums = albumResults[1];
    return (
      <div>
        <h1 className="main-h1">Albums</h1>
        <div className="results">
          {albums.map(album => {
            return (
              <div className="album-artist-container">
                <div className="image-hover-container">
                  {/* <Link to={`/albums/${album.id}`}> */}
                  <img src={album.album_art} />
                  <div className="Mike">
                    <button
                      id="Mike-button"
                      onClick={() => this.handlePlay(album)}
                    >
                      <img id="Mike" src="play_white.png" />
                    </button>
                  </div>
                  {/* </Link> */}
                </div>
                <div className="artist-container">
                  <Link id="grid-artist" to={`/albums/${album.id}`}>
                    {album.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  displayGenres(genreResults) {
    let genres = genreResults[1];
    return (
      <div>
        <h1 className="main-h1">Genres</h1>
        <div className="results">
          {genres.map(genre => {
            return (
              <div className="album-artist-container">
                <div className="image-hover-container">
                  <Link to={`/genres/${genre.id}`}>
                    <img src={genre.genre_image} />
                  </Link>
                </div>
                <div className="artist-container">
                  <Link id="grid-genre" to={`/genres/${genre.id}`}>
                    {genre.category}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  displayPodcasts(podcastResults) {
    let podcasts = podcastResults[1];
    return (
      <div>
        <h1 className="main-h1">Podcasts</h1>
        <div className="results">
          {podcasts.map(podcast => {
            return (
              <div className="album-artist-container">
                <div className="image-hover-container">
                  <Link to={`/shows/${podcast.id}`}>
                    <img src={podcast.show_photo} />
                  </Link>
                </div>
                <div className="artist-container">
                  <Link id="grid-artist" to={`/shows/${podcast.id}`}>
                    {podcast.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const { results = {} } = this.props;
    let searchResults =
      Object.entries(results).filter(([k, v]) => {
        return v != undefined;
      }) || [];
    let artistResults =
      searchResults.filter(result => {
        return result[0] === "artists";
      })[0] || [];
    let albumResults =
      searchResults.filter(result => {
        return result[0] === "albums";
      })[0] || [];
    let genreResults =
      searchResults.filter(result => {
        return result[0] === "genres";
      })[0] || [];
    let podcastResults =
      searchResults.filter(result => {
        return result[0] === "shows";
      })[0] || [];

    return (
      <div className="search-container">
        <div className="search-inputBox">
          <div className="search-contentSpacing">
            <input
              type="text"
              value={this.state.input}
              placeholder="Start typing..."
              onChange={this.update("input")}
            />
          </div>
        </div>
        <div
          className={
            Object.values(results).every(value => value === undefined)
              ? "search-content-empty"
              : "search-content-full"
          }
        >
          <span id="search-amplify-header">Search Amplify</span>
          <span id="search-amplify-subheader">
            Find your favorite songs, artists, albums, podcasts and playlists.
          </span>
        </div>
        <div className="search-results-main">
          {artistResults.length > 0 ? this.displayArtists(artistResults) : ""}
          {albumResults.length > 0 ? this.displayAlbums(albumResults) : ""}
          {genreResults.length > 0 ? this.displayGenres(genreResults) : ""}
          {podcastResults.length > 0
            ? this.displayPodcasts(podcastResults)
            : ""}
        </div>
      </div>
    );
  }
}

export default Search;

// TODO: Improve quality of search results:
//  1) Searching artist name displays artist AND albums they've produced
