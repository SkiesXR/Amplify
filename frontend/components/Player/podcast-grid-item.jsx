import React from "react";
import { Link } from "react-router-dom";

class PodcastGridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.setLoaded = this.setLoaded.bind(this);
  }

  setLoaded(boolean) {
    this.setState({
      loaded: true
    });
  }

  handlePlay() {
    this.props.setCurrentSong(Object.values(this.props.show.episodes)[0]);
    this.props.setPlaying(true);
    this.props.setQueue(Object.values(this.props.show.episodes));
  }

  render() {
    const { title, show_photo, author } = this.props.show;
    const { show } = this.props;
    return (
      <div className="album-artist-container">
        <div className="image-hover-container">
          <div>
            {!this.state.loaded ? (
              <img src="AlbumArt-PlaceholderWithIcon.png" />
            ) : null}
          </div>
          <img src={show_photo} />
          <div className="Mike">
            <button id="Mike-button" onClick={this.handlePlay}>
              <img
                id="Mike"
                src="play_white.png"
                style={!this.state.loaded ? { visibility: "hidden" } : {}}
                onLoad={() => this.setLoaded(true)}
              />
            </button>
          </div>
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
