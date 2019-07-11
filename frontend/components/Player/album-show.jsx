import React from 'react';
import AlbumShowItem from './album-show-item';

class AlbumShow extends React.Component {

    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId);
    }

    render() {

        // const { album } = this.props;
        // let tracks = Object.values(album.tracks).map(track => {
        //     return <AlbumShowItem track={ track } />
        // })
        return (
            <div className="album-show-c1">
                <div className="album-show-container-c2">
                    {/* <div>
                        { AlbumShowItem }
                    </div> */}
                </div>
            </div>
        );
    }
}

export default AlbumShow;