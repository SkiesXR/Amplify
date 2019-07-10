import React from 'react';
import { Link } from 'react-router-dom';

class GridItem extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { album_art, title, artist  } = this.props.album;
        return (
            <div className="album-artist-container">
                <img src={ album_art }></img>
                <Link id="grid-title" to="">{ title }</Link>
                <Link id="grid-artist" to="">{ artist }</Link>
            </div>
        );
    }
}

export default GridItem;