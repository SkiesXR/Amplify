import React from 'react';
import { Link } from 'react-router-dom';


class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
        debugger;
    }

    render() {
        const { playlists } = this.props;
        let userPlaylists = playlists.map( playlist => {
            return (
                <div>{ playlist.title }</div>
            );
        });
        //TODO: Create Playlist Grid Item Component
        // let playlists = this.props.playlists.map(playlist => {
        //     return <PlaylistGridItem key={playlist.title} playlist={playlist} />
        // })

        return (
            <div className="playlist-index-container">
                <div className="main-h1">
                    Playlist Index
                </div>
                <div>
                    { userPlaylists }
                </div>
            </div>
        );
    }
}

export default PlaylistIndex;