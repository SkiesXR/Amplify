import React from "react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      blankResults: null
    };
    this.displayArtists = this.displayArtists.bind(this);
    this.displayAlbums = this.displayAlbums.bind(this);
    this.displayGenres = this.displayGenres.bind(this);
    this.displayPodcasts = this.displayPodcasts.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSearchResults();
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
      if (this.state.input === "") this.setState({ blankResults: null });
      this.props
        .fetchSearchResults(e.currentTarget.value)
        .then(() =>
          Object.values(this.props.results).every(value => value === undefined)
            ? this.setState({ blankResults: true })
            : this.setState({ blankResults: false })
        );
    };
  }

  handleAudio(type, payload, files) {
    this.props.setPlaying(true);
    this.props.setCurrentSong(Object.values(payload[files])[0]);
    this.props.setQueue(Object.values(payload[files]));
  }

  displayArtists(artistResults) {
    let artists = artistResults[1];
    return (
      <div>
        <h1 className="main-h1">Artists</h1>
        <div className="results">
          {artists.map(artist => {
            return (
              <div key={artist.id} className="album-artist-container">
                <div className="artist-image-hover-container">
                  <Link className="artist-result" to={`/artists/${artist.id}`}>
                    <img src={artist.artist_photo} />
                  </Link>
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
              <div key={album.id} className="album-artist-container">
                <div className="image-hover-container">
                  <img src={album.album_art} />
                  <div className="Mike">
                    <button
                      id="Mike-button"
                      onClick={() => this.handleAudio("album", album, "tracks")}
                    >
                      <img id="Mike" src="play_white.png" />
                    </button>
                  </div>
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
              <div key={genre.id} className="album-artist-container">
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
              <div key={podcast.id} className="album-artist-container">
                <div className="image-hover-container">
                  <img src={podcast.show_photo} />
                  <div className="Mike">
                    <button
                      id="Mike-button"
                      onClick={() =>
                        this.handleAudio("podcast", podcast, "episodes")
                      }
                    >
                      <img id="Mike" src="play_white.png" />
                    </button>
                  </div>
                </div>
                <div className="artist-container">
                  <Link id="grid-artist" to={`/podcasts/${podcast.id}`}>
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

    const noResults = (
      <div className="search-content-empty">
        <span id="search-amplify-header">
          No results found for "{this.state.input}"
        </span>
        <span id="search-amplify-subheader">
          Please make sure your words are spelled correctly or use less or
          different keywords.
        </span>
      </div>
    );

    const noInput = (
      <div className="search-content-empty">
        <span id="search-amplify-header">Search Amplify</span>
        <span id="search-amplify-subheader">
          Find your favorite songs, artists, albums, podcasts and playlists.
        </span>
      </div>
    );

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
        {this.state.input === "" ? noInput : ""}
        {this.state.input != "" && this.state.blankResults === true
          ? noResults
          : ""}
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
