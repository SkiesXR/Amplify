import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',            
        };
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

    render() {
        const { results = {} } = this.props;
        // let inputClass = Object.values(results).every(value => (value === undefined)) ? "result-dn" : "result-d";
        let searchResults = Object.entries(results).filter(([k,v]) => {return v != undefined}) || [];
        // debugger;
        let shownResults = searchResults.map(result => {
            // debugger;
            switch(result[0]) {
                case "albums":
                    return (
                        // debugger;
                    <div id="results-albums">
                        <h1 className="main-h1">Albums</h1>
                        <div className="album-artist-container">
                            <div className="image-hover-container">
                                <Link to={`/albums/${result[1].id}`}><img src={result[1].album_art} />
                                    <div className="Mike">
                                        <button id="Mike-button">
                                            <img id="Mike" src="play_white.png" />
                                        </button>
                                    </div>
                                </Link>
                            </div>

                            {/* <div className="title-container">
                                <Link id="grid-title" to={`/albums/${result[1].id}`}>{title}</Link>
                            </div> */}

                            <div className="artist-container">
                                    <Link id="grid-artist" to={`/albums/${result[1].id}`}>{result[1].title}</Link>
                            </div>
                        </div>
                    </div>
                    );
                    break;
                case "artists":
                    // debugger;
                    return (
                        <div id="results-artists">
                            <h1 className="main-h1">Artists</h1>
                            <div className="album-artist-container">
                                <div className="artist-image-hover-container">
                                    <img src={ result[1].artist_photo } />
                                </div>

                                <div className="title-container">
                                    <Link id="grid-title" to={ `/artists/${result[1].id}` }>{ result[1].name }</Link>
                                </div>
                            </div>
                        </div>
                        );
                    break;
                case "genres":
                    return (
                        // debugger;
                        <div id="results-genres">
                            <div>{result[1].category}</div>
                        </div>
                        );
                    break;
                case "shows":
                    return (
                        // debugger;
                        <div id="results-shows">
                            <div>{result[1].title}</div>
                        </div>
                        );
                    break;
            }
        });
        
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
                    { shownResults }
                </div>
            </div>
        );
    }
}

export default Search;