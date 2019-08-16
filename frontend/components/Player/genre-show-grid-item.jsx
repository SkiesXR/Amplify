import React from "react";
import { Link } from "react-router-dom";

class GenreShowGridItem extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    debugger;
    const { artist } = this.props;
    const { id, name, artist_photo } = artist;

    return (
      <div className="album-artist-container">
        <div className="artist-image-hover-container">
          <img src={artist_photo} />
        </div>

        <div className="title-container">
          <Link id="grid-title" to={`/artists/${artist.id}`}>
            {name}
          </Link>
        </div>
      </div>
    );
  }
}

export default GenreShowGridItem;
