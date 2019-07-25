import React from 'react';
import { Link } from 'react-router-dom';

const AlbumShowItem
    = (props) => {

    const { album_art, title, artist } = props.album;
    // const { track } = props.track;
    debugger;   
    const showItem =
        <div className="album-artist-container">
            {/* { title } */}
            {/* <div className="image-hover-container">
                <Link to={`/albums/${props.album.id}`}><img src={album_art} />
                    <div className="Mike">
                        <button id="Mike-button">
                            <img id="Mike" src="play_white.png" />
                        </button>
                    </div>
                </Link>
            </div> */}

            <div className="title-container">
                <Link id="grid-title" to="">{props.track.title}</Link>
            </div>

            {/* <div className="artist-container">
                <Link id="grid-artist" to="">{artist}</Link>
            </div> */}
        </div>
    return showItem;
}

export default AlbumShowItem;

// class AlbumShowItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         debugger;
//         const { album_art, title, artist } = this.props.album;
//         const { track } = this.props.track;

//         return(
//             <div className="album-artist-container">{track}</div>
//         );
//     }
// }

// export default AlbumShowItem;