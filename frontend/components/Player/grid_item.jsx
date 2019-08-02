import React from 'react';
import { Link } from 'react-router-dom';

const GridItem = (props) => {

        
        const { album_art, title, artist, artist_id  } = props.album;
        const gridItem =
            <div className="album-artist-container">
                <div className="image-hover-container">
                    <Link to={`/albums/${props.album.id}`}><img src={album_art} />
                    <div className="Mike">
                        <button id="Mike-button">
                            <img id="Mike" src="play_white.png"/>
                        </button>
                    </div>
                    </Link>   
                </div>
                
                <div className="title-container">
                    <Link id="grid-title" to={`/albums/${props.album.id}`}>{title}</Link>
                </div>

                <div className="artist-container">
                    <Link id="grid-artist" to={`/artists/${artist_id}`}>{ artist }</Link>
                </div>
            </div>
        return gridItem;
    }
    
export default GridItem;