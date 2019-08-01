import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteIcon: "music_note.png",
            noteContainerClass: "tc-outer-top"
        }
        this.playNote = this.playNote.bind(this);
        this.musicNote = this.musicNote.bind(this);
    }

    // Flip musical note icon to play icon once mouse enters track container
    playNote() {
        this.setState({
            noteIcon: "play.png",
            noteContainerClass: "tc-outer-top-2"
        });
    }

    // Flip play icon to musical note icon once mouse leaves track container
    musicNote() {
        this.setState({
            noteIcon: "music_note.png",
            noteContainerClass: "tc-outer-top"
         });
    }

    render() {
        const { length, title } = this.props.track;
        const { artist_name } = this.props.album;
        let noteContainerClass = this.state.noteContainerClass;
        let min = length.slice(0,2);
        let sec = length.slice(3);
        let duration = `${min}:${sec}`;
        
        return(
            <div onMouseEnter={ this.playNote } onMouseLeave={ this.musicNote } className="track-container">
                <div className="tc-outer">
                    <div className={ noteContainerClass }>
                        <img id="tc-note" src={ this.state.noteIcon } />
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
