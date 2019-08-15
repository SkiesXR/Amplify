import React from "react";
import { Link } from "react-router-dom";

class PodcastGridItem extends React.Component {
  render() {
    const { title, show_photo, author } = this.props.show;
    const { show } = this.props;
    return (
      <div className="album-artist-container">
        <div className="image-hover-container">
          <img src={show_photo} />
        </div>

        <div className="title-container">
          <Link id="grid-title" to={`/podcasts/${show.id}`}>
            {title}
          </Link>
        </div>
      </div>
    );
  }
}

export default PodcastGridItem;
