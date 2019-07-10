import React from 'react';
import { Link } from 'react-router-dom';

class GenreGridItem extends React.Component {

    render() {

        const { category, genre_image } = this.props.genre;

        return (
            <div className="album-artist-container">
                <div className="image-hover-container">
                    <img src={ genre_image } />
                </div>

                <div className="title-container">
                    <Link id="grid-title" to="">{ category }</Link>
                </div>
            </div>
        );
    }
}

export default GenreGridItem;