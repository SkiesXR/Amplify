import React from 'react';

class ArtistShow extends React.Component {

    componentDidMount() {
        let artistId = this.props.match.params.artistId;
        this.props.fetchArtist(artistId);
    }

    render() {
        debugger;
        return (
            <div className="artist-show-c1">
                <span style="color: white">Hey there</span>
            </div>
        );
    }
}

export default ArtistShow;
