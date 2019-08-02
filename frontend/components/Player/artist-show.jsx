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

        let albumListLP = Object.values(sortedAlbums).map(album => {
            if (album.album_type === "Album") {
                return <ArtistShowItem key={ album.title } album={ album } artist= { artist }/>
            }
        });
        
        let albumListEP = Object.values(sortedAlbums).map(album => {
            if (album.album_type === "EP" || album.album_type === "Single") {
                return <ArtistShowItem key={ album.title } album={ album } artist={ artist } />
            }
        });

        return (
            <div className="artist-show-c1">
                {/* <img src={ artist_photo }></img> */}
                <div>{name}</div>
                <div>{bio}</div>
                Albums
                <div>{ albumListLP }</div>
                EPs & Singles
                <div>{albumListEP}</div>
            </div>
        );
    }
}

export default ArtistShow;
