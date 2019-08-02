import React from 'react';
import ArtistShowItem from './artist-show-item';

class ArtistShow extends React.Component {

    componentDidMount() {
        let artistId = this.props.match.params.artistId;
        this.props.fetchArtist(artistId);
    }

    render() {
        if (!this.props.artist) return "";
        let artist = this.props.artist || {};
        const { artist_photo, bio, name } = this.props.artist || "";
        const albums = artist.albums || {};
        
        // sort albums by release year
        let sortedAlbums = Object.values(albums).sort(function (x,y) {
            return x.release_date.slice(0,4) - y.release_date.slice(0,4);
        })

        let albumList = Object.values(sortedAlbums).map(album => {
            // return <li>{album.title} - {album.album_type} - {album.release_date}</li>
            return <ArtistShowItem key={ album.title } album={ album } artist= { artist }/>
        })

        return (
            <div className="artist-show-c1">
                <div>{name}</div>
                <div>{bio}</div>
                <div>{ albumList }</div>
                {/* <img src={ artist_photo }></img> */}
            </div>
        );
    }
}

export default ArtistShow;
