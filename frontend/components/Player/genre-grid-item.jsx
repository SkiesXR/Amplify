import React from "react";
import { Link } from "react-router-dom";

class GenreGridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.setLoaded = this.setLoaded.bind(this);
  }

  setLoaded(boolean) {
    this.setState({
      loaded: true
    });
  }

  render() {
    const { category, genre_image } = this.props.genre;

    return (
      <div className="album-artist-container">
        <div className="genre-image-hover-container">
          <div>
            {!this.state.loaded ? (
              <img src="AlbumArt-PlaceholderWithIcon.png" />
            ) : null}
          </div>
          <Link id="grid-title" to={`/genres/${this.props.genreId}`}>
            <img
              src={genre_image}
              style={!this.state.loaded ? { visibility: "hidden" } : {}}
              onLoad={() => this.setLoaded(true)}
            />
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
