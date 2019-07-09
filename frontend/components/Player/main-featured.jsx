import React from 'react';

class MainFeatured extends React.Component {

    componentDidMount() {
        this.props.fetchArtists();
        this.props.fetchAlbums();
    }

    render() {
        let albums = this.props.albums.map(album => {
            return <li>{ album.title }</li>
            // return <GridItem album={ album }/>
        })

        return (
            <div>
                <div className="header-grid">
                    <h1 className="main-h1">Made for { this.props.currentUser.username }</h1>
                </div>
                <div className="featured_container">
                    { albums }
                </div>
            </div>
        );
    }
}

export default MainFeatured;