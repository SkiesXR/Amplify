import React from 'react';
import { Link } from 'react-router-dom';

class GridItem extends React.Component {

    render() {

        const { album_art, title, artist  } = this.props.album;

        return (
            <div className="album-artist-container">
                <img src={ album_art }/>

                <div className="title-container">
                    <Link id="grid-title" to="">{title}</Link>
                </div>

                <div className="artist-container">
                    <Link id="grid-artist" to="">{ artist }</Link>
                </div>
            </div>
        );
    }
}

export default GridItem;