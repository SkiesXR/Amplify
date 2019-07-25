import React from 'react';
import { withRouter } from 'react-router-dom';
import GenreShowGridItem from './genre-show-grid-item';

class GenreShow extends React.Component {

    componentDidMount() {
        let genreId = this.props.match.params.genreId;
        this.props.fetchGenre(genreId);
    }

    render() {
        if (!this.props.genres) return "";
        let artists = this.props.genres.artists || {};
        let category = this.props.genres.category || "";
        let genreArtists = Object.values(artists).map(artist => {
            return <GenreShowGridItem key={artist.name} artist={artist} />
        })
        
        return (
            <div>
                <div className="header-grid">
                    <h1 className="main-h1">Popular { category } Artists</h1>
                </div>
                <div className="featured-container">
                    { genreArtists }
                </div>
            </div>
        );
    }
}

export default withRouter(GenreShow);