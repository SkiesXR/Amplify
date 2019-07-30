import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShowItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger;
        const { artist_name } = this.props.album;
        const { length, title } = this.props.track;
        let min = length.slice(0,2);
        let sec = length.slice(3);
        let duration = `${min}:${sec}`;

        return(
            <div className="track-container">
                <div className="tc-outer">
                    <div className="tc-outer-top">
                        <img src={"music_note.png"} />
                    </div>  
                </div>
                <div className="tc-title-artist">
                    <div className="tc-title">{ title }</div>
                    <div className="tc-artist">{ artist_name }</div>
                </div>
                <div className="tc-duration">
                    <div className="tc-duration-top">{ duration }</div>
                </div>
            </div>
        );
    }
}

export default AlbumShowItem;

// TODO: Dynamically change music note to play on hover or click

