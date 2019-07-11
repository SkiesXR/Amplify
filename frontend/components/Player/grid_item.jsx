import React from 'react';
import { Link } from 'react-router-dom';

class GridItem extends React.Component {

    render() {

        const { album_art, title, artist  } = this.props.album;

        return (
            <div className="album-artist-container">
                <div className="image-hover-container">
                    <img src={album_art} />
                    <div className="Mike">
                        <button id="Mike-button">
                        <img id="Mike" src="play_white.png" />
                    </button></div>
                    

                    
                </div>
                

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