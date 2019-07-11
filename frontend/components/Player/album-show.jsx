import React from 'react';

class AlbumShow extends React.Component {

    componentDidMount() {
        // debugger;
        this.props.fetchAlbum(this.props.match.params.albumId);
        // debugger;
    }

    render() {
        // debugger;

        if (!this.props.album) {
            console.log(this.props);
            return <p>ANGELA IS AWESOME</p>
        }

        const { album } = this.props;
        let tracks = Object.values(album.tracks).map(track => {
            return <li>{ track.title }</li>
        })
        return (
            <div>
                <div className="header-grid">
                    <h1 className="main-h1">Album</h1>
                </div>
                <div>
                    { tracks }
                </div>
            </div>
        );
    }
}

export default AlbumShow;