import React from "react";
import { Link } from "react-router-dom";

class ArtistGridItem extends React.Component {
  render() {
    const { id, name, artist_photo } = this.props.artist;

    return (
      <div className="album-artist-container">
        <div className="artist-image-hover-container">
          <img src={artist_photo} />
        </div>

        <div className="title-container">
          <Link id="grid-title" to={`/artists/${id}`}>
            {name}
          </Link>
        </div>
      </div>
    );
  }
}

export default ArtistGridItem;
