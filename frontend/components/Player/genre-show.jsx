import React from 'react';
import { withRouter } from 'react-router-dom';
import GenreShowGridItem from './genre-show-grid-item';

class GenreShow extends React.Component {

    componentDidMount() {
        // debugger;
        let genreId = this.props.match.params.genreId;
        this.props.fetchGenre(genreId);
        // this.props.fetchGenre(this.props.genre.id)
    }

    render() {
        debugger;
        console.log(this.props);
        let artists = this.props.genres.artists || {};
        let category = this.props.genres.category || "";
        if (!this.props.genres) return "";
        // const { category, artists } = this.props.genres;
        debugger
        let genreArtists = Object.values(artists).map(artist => {
            // debugger;
            return <GenreShowGridItem key={artist.name} artist={artist} />
        })
        
        return (
            <div>
                {/* HELLO */}
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