import React from "react";
import { Link } from "react-router-dom";

class ArtistGridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.setLoaded = this.setLoaded.bind(this);
  }

  setLoaded(boolean) {
    this.setState({
      loaded: true
    });
  }

  render() {
    const { id, name, artist_photo } = this.props.artist;

    return (
      <div className="album-artist-container">
        <div className="artist-image-hover-container">
          <Link id="grid-title" to={`/artists/${id}`}>
            <div>
              {!this.state.loaded ? (
                <img id="artist-placeholder" src="Artist-Placeholder.png" />
              ) : null}
            </div>
            <img
              src={artist_photo}
              style={!this.state.loaded ? { visibility: "hidden" } : {}}
              onLoad={() => this.setLoaded(true)}
            />
          </Link>
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
