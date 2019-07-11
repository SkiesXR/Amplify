import React from 'react';
import GenreGridItem from './genre-grid-item';

class MainGenres extends React.Component {

    componentDidMount() {
        this.props.fetchGenres();
    }

    render() {
        let genres = this.props.genres.map(genre => {
            return <GenreGridItem key={genre.category} genre={genre} />
        })

        return (
            <div>
                <div className="header-grid">
                    <h1 className="main-h1">Genres</h1>
                </div>
                <div className="featured-container">
                    { genres }
                </div>
            </div>
        );
    }
}

export default (MainGenres);