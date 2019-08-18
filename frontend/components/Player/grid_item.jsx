import React from "react";
import { Link } from "react-router-dom";

class GridItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    debugger;
    this.props.setCurrentSong(Object.values(this.props.album))[0];
    this.props.setPlaying(true);
    this.props.setQueue(Object.values(this.props.album));
  }

  render() {
    const { id, album_art, title, artist, artist_id } = this.props.album;
    const gridItem = (
      <div className="album-artist-container">
        <div className="image-hover-container" onClick={this.handlePlay}>
          {/* <Link to={`/albums/${id}`}> */}
          <img src={album_art} />
          <div className="Mike">
            <button id="Mike-button">
              <img id="Mike" src="play_white.png" />
            </button>
          </div>
          {/* </Link> */}
        </div>

        <div className="title-container">
          <Link id="grid-title" to={`/albums/${id}`}>
            {title}
          </Link>
        </div>

        <div className="artist-container">
          <Link id="grid-artist" to={`/artists/${artist_id}`}>
            {artist}
          </Link>
        </div>
      </div>
    );

    return gridItem;
  }
}

// const GridItem = props => {
//   const { album_art, title, artist, artist_id } = props.album;
//   const gridItem = (
//     <div className="album-artist-container">
//       <div className="image-hover-container">
//         <Link to={`/albums/${props.album.id}`}>
//           <img src={album_art} />
//           <div className="Mike">
//             <button id="Mike-button">
//               <img id="Mike" src="play_white.png" />
//             </button>
//           </div>
//         </Link>
//       </div>

//       <div className="title-container">
//         <Link id="grid-title" to={`/albums/${props.album.id}`}>
//           {title}
//         </Link>
//       </div>

//       <div className="artist-container">
//         <Link id="grid-artist" to={`/artists/${artist_id}`}>
//           {artist}
//         </Link>
//       </div>
//     </div>
//   );
//   return gridItem;
// };

export default GridItem;
