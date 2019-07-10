import React from 'react';
import { Link } from 'react-router-dom';

class GridItem extends React.Component {

    render() {

        const { album_art, title, artist  } = this.props.album;

        return (
            <div className="album-artist-container">
                <img src={ album_art }/>

                <div class="title-container">
                    <Link id="grid-title" to="">{title}</Link>
                </div>

                <div class="artist-container">
                    <Link id="grid-artist" to="">{ artist }</Link>
                </div>
            </div>
        );
    }
}

export default GridItem;