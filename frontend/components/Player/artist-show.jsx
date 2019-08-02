import React from 'react';

class ArtistShow extends React.Component {

    componentDidMount() {
        let artistId = this.props.match.params.artistId;
        this.props.fetchArtist(artistId);
    }

    render() {
        debugger;
        if (!this.props.artist) return "";
        let artist = this.props.artist || {};
        const { artist_photo, bio, name } = this.props.artist || "";
        const albums = artist.albums || {};
        let albumList = Object.values(albums).map(album => {
            return <li>{ album.title }</li>
        })
        return (
            <div className="artist-show-c1">
                <div>{name}</div>
                <div>{bio}</div>
                <div>{ albumList }</div>
                <img src={ artist_photo }></img>
            </div>
        );
    }
}

export default ArtistShow;
