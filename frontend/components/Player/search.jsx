import React from 'react';

class Search extends React.Component {
    render() {
        return(
            <div className="search-container">
                <div className="search-inputBox">
                    <div className="search-contentSpacing">
                        <input type="text" placeholder="Start typing..."/>
                    </div>
                </div>
                <div className="search-content-empty">
                    <span id="search-amplify-header">Search Amplify</span>
                    <span id="search-amplify-subheader">Find your favorite songs, artists, albums, podcasts and playlists.</span>
                </div>
            </div>
        );
    }
}

export default Search;