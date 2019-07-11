import React from 'react';
import { Link } from 'react-router-dom';

class PodcastGridItem extends React.Component {

    render() {
        debugger;
        const { title, show_photo, author } = this.props.show;
        debugger;
        return (
            <div className="album-artist-container">
                <div className="image-hover-container">
                    <img src={ show_photo } />
                </div>

                <div className="title-container">
                    <Link id="grid-title" to="">{ title }</Link>
                </div>
            </div>
        );
    }
}

export default PodcastGridItem;

