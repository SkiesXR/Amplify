import React from "react";
import { Link } from "react-router-dom";

class GenreGridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category, genre_image } = this.props.genre;

    return (
      <div className="album-artist-container">
        <div className="image-hover-container">
          <Link id="grid-title" to={`/genres/${this.props.genreId}`}>
            <img src={genre_image} />
          </Link>
        </div>

        <div className="title-container">
          <Link id="grid-title" to={`/genres/${this.props.genreId}`}>
            {category}
          </Link>
        </div>
      </div>
    );
  }
}

export default GenreGridItem;
