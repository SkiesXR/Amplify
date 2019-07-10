import React from 'react';
import ArtistGridItem from './artist-grid-item';

class MainArtists extends React.Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        let artists = this.props.artists.map(artist => {
            return <ArtistGridItem key={artist.name} artist={artist} />
        })

        return (
            <div>
                <div className="header-grid">
                    <h1 className="main-h1">Made for {this.props.currentUser.username}</h1>
                </div>
                <div className="featured-container">
                    {artists}
                </div>
            </div>
        );
    }
}

export default MainArtists;