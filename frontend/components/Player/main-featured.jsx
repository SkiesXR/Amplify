import React from 'react';
import GridItem from './grid_item';

class MainFeatured extends React.Component {

    componentDidMount() {
        this.props.fetchArtists();
        this.props.fetchAlbums();
    }

    render() {
        let albums = this.props.albums.map(album => {
            return <GridItem key={ album.title }album={ album }/>
        })
        // debugger;
        return (
            <div>
                <div className="header-grid">
                    <h1 className="main-h1">Albums</h1>
                </div>
                <div className="featured-container">
                    { albums }
                </div>
            </div>
        );
    }
}

export default MainFeatured;