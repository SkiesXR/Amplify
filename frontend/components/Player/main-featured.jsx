import React from 'react';

class MainFeatured extends React.Component {

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        debugger;
        let artists = this.props.artists.map(artist => {
            return <li>{artist.name}</li>
        })

        return (
            <div className="header-grid">
                <h1 className="main-h1">Made for { this.props.currentUser.username }</h1>
            </div>
        );
    }
}

export default MainFeatured;