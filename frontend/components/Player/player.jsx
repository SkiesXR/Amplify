import React from 'react';


class Player extends React.Component {

    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);

        this.state = {
            playPauseButton: "play_white.png"
        }
    }
    // Logic for audio controls
    playAudio() {
        const music = document.getElementById("audio");
        if (music.paused) {
            music.play();
            this.setState({ playPauseButton: "pause_white.png" })
        } else {
            music.pause();
            this.setState({ playPauseButton: "play_white.png" })
        }
    }

    render() {

        return (
            <div className="player">
                <div id="now-playing-bar">

                    {/* left side */}
                    <div className="now-playing-left">
                        <div className="thumb-image"></div>
                        <div className="np-container">
                            <a id="npt" href="">Track</a>
                            <div className="now-playing-text">
                        </div>
                            <a id="npa" href="">Artist Name</a>
                        </div>
                        <div className="love-container">
                            <button id="love-button">
                                <img id="love" src="love.png"/>
                            </button>
                        </div>
                    </div>


                    {/* Player Controls */}
                    <div className="now-playing-controls">
                        <div className="now-playing-buttons">

                            {/* shuffle button */}
                            <button id="np-button">
                                <img id="shuffle" src="shuffle_white.png" />
                            </button>

                            {/* back button */}
                            <button id="np-button">
                                <img id="direction" src="previous_white.png" />
                            </button>

                            {/* play / pause buttons */}
                            <button onClick={this.playAudio} id="np-button">
                                <img id="play" src={ this.state.playPauseButton } />
                                {/* <img id="play" src="play_white.png" /> */}
                            </button>

                            {/* next button */}
                            <button id="np-button">
                                <img id="direction" src="next_white.png" />
                            </button>

                            {/* repeat button */}
                            <button id="np-button">
                                <img id="repeat" src="repeat_white.png" />
                            </button>
                        </div>
                        <audio id="audio"><source src="skylines.mp3"/></audio>
                    </div>
                    
                    {/* TODO: Decide what's going on the right-hand side of the now-playing bar*/}
                    <div className="now-playing-right">
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;