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
        let releaseYear = this.props.album.release_date.slice(0,4);
        let trackCount = Object.keys(this.props.album.tracks).length;    
        })
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
                                                        <div className="cover-art-icon">
                                                            <img id="Mike" src="play_white.png" />
                                                        </div>
                                                        <div className="album-show-cover-art" background-image={this.props.album.album_art}>
                                                        </div>
                                                    </div>
                                                    <button id="cover-art-play">
                                                    </button>
                                                </div>
                                                <div className="album-title-container">
                                                    <span>{this.props.album.title}</span>
                                                </div>
                                                <div className="album-artist">{this.props.album.artist_name}</div>
                                            </div>
                                        </div>
                                        <div className="album-show-left-play"></div>
                                        <div></div>
                                    </div>
                                    <div className="album-show-c3a-bottom">
                                        <p>{releaseYear} • {trackCount}</p>
                                    </div>
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
                    </section>
                </div>
            </div>
        );
    }
}

export default AlbumShow;