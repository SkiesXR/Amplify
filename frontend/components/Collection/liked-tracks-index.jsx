import React from "react";

class LikedTrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLikedTracks();
  }

  render() {
    return (
      <div className="main-h1" style={{ textAlign: `center` }}>
        Liked Songs Coming Soon!
      </div>
    );
  }
}

export default LikedTrackIndex;
