import React from "react";
import PodcastShowItem from "./podcast-show-item";

class PodcastShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShow(this.props.match.params.podcastId);
  }

  render() {
    debugger;
    if (!this.props.podcast) return "";
    let { episodes, podcast } = this.props;
    const episodeCount = Object.keys(episodes).length || "";
    if (episodes) {
      let podcastEpisodes = Object.values(episodes).map(episode => {
        return (
          <PodcastShowItem
            key={episode.title}
            episode={episode}
            podcast={podcast}
            setCurrentSong={this.props.setCurrentSong}
            toggleSong={this.props.toggleSong}
            setQueue={this.props.setQueue}
            setPlaying={this.props.setPlaying}
          />
        );
      });
    } else {
      //   var episodeCount = 0;
      var podcastEpisodes = "";
    }

    return (
      <div className="album-show-c1">
        <div className="album-show-c2">
          <section id="album-show-section">
            <div className="fluid-container">
              <div className="fluid">
                <div className="album-show-c3a">
                  <div className="album-show-c3a-content">
                    <div className="album-show-c3a-content-header">
                      <div className="cover-art-info">
                        <div className="cover-art-shadow">
                          <div>
                            {/* <div className="cover-art-icon">
                                                            <img src="play_white.png"/>
                                                        </div> */}
                            <div>
                              <img
                                className="album-show-cover-art"
                                src={podcast.show_photo}
                              />
                            </div>
                          </div>
                          <button id="cover-art-play" />
                        </div>
                        <div className="album-title-container">
                          <span>{podcast.title}</span>
                        </div>
                        <div className="album-artist">{podcast.author}</div>
                      </div>
                    </div>
                    <div
                      className="album-show-left-play"
                      onClick={this.addToQueue}
                    >
                      Play
                    </div>
                    <div>
                      <div className="album-show-c3a-bottom">
                        <p id="podcast-description">{podcast.description}</p>
                        <p>
                          {episodeCount ? episodeCount : 0}
                          {episodeCount != 1 ? " EPISODES" : " EPISODE"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="album-show-c3b">{podcastEpisodes}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default PodcastShow;
