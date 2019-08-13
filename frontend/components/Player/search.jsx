import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',            
        };
        // this.displayResult = this.displayResult.bind(this);
        this.displayArtists = this.displayArtists.bind(this);
    }

    componentDidMount() {
        // this.props.receiveSearchResults();
    }

    update(field) {
        let that = this;
        return function(e) {
            that.setState({
                [field]: e.currentTarget.value
            });
            that.props.fetchSearchResults(e.currentTarget.value);
        }
    }

    displayArtists(artistResults) {
        let artists = artistResults[1];
        return (
            <div>
                <h1 className="main-h1">Artists</h1>
                <div id="results-artists">
                    { artists.map(artist => {
                        return (
                            <div className="album-artist-container">
                                <div className="artist-image-hover-container">
                                    <img src={artist.artist_photo} />
                                </div>
                                <div className="title-container">
                                    <Link id="grid-title" to={`/artists/${artist.id}`}>{artist.name}</Link>
                                </div>
                            </div>
                            );
                        })
                    }  
                </div>
            </div>
        );
    }

    // displayResult(result) {
    //     switch (result[0]) {
    //         case "albums":
    //             debugger;
    //             return result[1].map(album => {
    //                 debugger;
    //                 return (
    //                     <div id="results-albums">
    //                         <h1 className="main-h1">Albums</h1>
    //                         <div className="album-artist-container">
    //                             <div className="image-hover-container">
    //                                 <Link to={`/albums/${album.id}`}><img src={album.album_art} />
    //                                     <div className="Mike">
    //                                         <button id="Mike-button">
    //                                             <img id="Mike" src="play_white.png" />
    //                                         </button>
    //                                     </div>
    //                                 </Link>
    //                             </div>
    //                             <div className="artist-container">
    //                                 <Link id="grid-artist" to={`/albums/${album.id}`}>{album.title}</Link>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 );
    //             });
    //             console.log(result[1]);
    //             break;
    //         case "artists":
    //             return (
    //                 <div id="results-artists">
    //                     <h1 className="main-h1">Artists</h1>
    //                     <div className="album-artist-container">
    //                         <div className="artist-image-hover-container">
    //                             <img src={result[1].artist_photo} />
    //                         </div>
    //                         <div className="title-container">
    //                             <Link id="grid-title" to={`/artists/${result[1].id}`}>{result[1].name}</Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             );
    //             break;
    //         case "genres":
    //             return (
    //                 <div id="results-genres">
    //                     <h1 className="main-h1">Genres</h1>
    //                     <div className="album-artist-container">
    //                         <div className="image-hover-container">
    //                             <Link to={`/genres/${result[1].id}`}><img src={result[1].genre_image} />
    //                                 <div className="Mike">
    //                                     <button id="Mike-button">
    //                                         <img id="Mike" src="play_white.png" />
    //                                     </button>
    //                                 </div>
    //                             </Link>
    //                         </div>
    //                         <div className="artist-container">
    //                             <Link id="grid-artist" to={`/genres/${result[1].id}`}>{result[1].category}</Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             );
    //             break;
    //         case "shows":
    //             return (
    //                 <div id="results-shows">
    //                     <h1 className="main-h1">Podcasts</h1>
    //                     <div className="album-artist-container">
    //                         <div className="image-hover-container">
    //                             <Link to=""><img src={result[1].show_photo} />
    //                                 <div className="Mike">
    //                                     <button id="Mike-button">
    //                                         <img id="Mike" src="play_white.png" />
    //                                     </button>
    //                                 </div>
    //                             </Link>
    //                         </div>
    //                         <div className="artist-container">
    //                             <Link id="grid-artist" to={`/genres/${result[1].id}`}>{result[1].title}</Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             );
    //             break;
    //     }
    // }

    render() {
        // debugger;
        const { results = {} } = this.props;
        let searchResults = Object.entries(results).filter(([k,v]) => {return v != undefined}) || [];
        let artistResults = searchResults.filter(result => { return result[0] === "artists" })[0] || [];
        let albumResults = searchResults.filter(result => { return result[0] === "albums" })[0] || [];
        let genreResults = searchResults.filter(result => { return result[0] === "genres" })[0] || [];
        let podcastResults = searchResults.filter(result => { return result[0] === "shows" })[0] || [];
        // debugger;
        // let shownResults = searchResults.map(result => { return this.displayResult(result);});
            
        return(
            <div className="search-container">
                <div className="search-inputBox">
                    <div className="search-contentSpacing">
                        <input 
                            type="text"
                            value={ this.state.input }
                            placeholder="Start typing..."
                            onChange={this.update('input')}/>
                    </div>
                </div>
                {/* <div className="search-content-empty"> */}
                <div className={ Object.values(results).every(value => (value === undefined)) ? "search-content-empty" : "search-content-full" }>
                    <span id="search-amplify-header">Search Amplify</span>
                    <span id="search-amplify-subheader">Find your favorite songs, artists, albums, podcasts and playlists.</span>
                </div>
                <div className="search-results-main">
                    {/* { shownResults } */}
                    { artistResults.length > 0 ? this.displayArtists(artistResults) : ""}
                </div>
            </div>
        );
    }
}

export default Search;