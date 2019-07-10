import React from 'react';
import { Link } from 'react-router-dom';

class ArtistGridItem extends React.Component {

    render() {

        const { name, artist_photo } = this.props.artist;

        return (
            <div className="album-artist-container">
                <div className="image-hover-container">
                    <img src={ artist_photo } />
                </div>

                <div className="title-container">
                    <Link id="grid-title" to="">{ name }</Link>
                </div>
            </div>
        );
    }
}

export default ArtistGridItem;