import React from 'react';
import AlbumShowItem from './album-show-item';

class AlbumShow extends React.Component {

    componentDidMount() {
        // debugger;
        let albumId = this.props.match.params.albumId;
        this.props.fetchAlbum(albumId);
    }

    render() {
        if (!this.props.album) return "";
        if (!this.props.tracks) return "";
        let tracks = this.props.tracks || {};
        let albumTracks = Object.values(tracks).map(track => {
            return <AlbumShowItem key={ track.title } track={ track } album ={ this.props.album } />
        })
        return (
            <div className="album-show-c1">
                <div className="album-show-c2">
                    <div className="album-show-c3">
                        <div className="album-show-c3a">
                        </div>
                        <div className="album-show-c3b">

                    

                {/* <div className="album-show-container-c2">
                    <div>
                        { albumTracks }
                    </div>
                </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumShow;