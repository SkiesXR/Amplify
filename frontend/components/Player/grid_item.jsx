import React from 'react';
import { Link } from 'react-router-dom';

// class GridItem extends React.Component {
const GridItem = (props) => {

    // render() {
        
        // const { album_art, title, artist  } = this.props.album;
        const { album_art, title, artist  } = props.album;
        // debugger;
        const gridItem =
        // return (
            <div className="album-artist-container">
                <div className="image-hover-container">
                    {/* <Link to={`/albums/${this.props.album.id}`}><img src={album_art} /> */}
                    <Link to={`/albums/${props.album.id}`}><img src={album_art} />
                    <div className="Mike">
                        <button id="Mike-button">
                            <img id="Mike" src="play_white.png" />
                        </button>
                    </div>
                    </Link>
                    

                    
                </div>
                

                <div className="title-container">
                    <Link id="grid-title" to="">{title}</Link>
                </div>

                <div className="artist-container">
                    <Link id="grid-artist" to="">{ artist }</Link>
                </div>
            </div>
        // );
        return gridItem;
    }
// }
// 
export default GridItem;