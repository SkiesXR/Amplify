import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class Player extends React.Component {

    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
        this.volChange = this.volChange.bind(this);
        this.toggleLove = this.toggleLove.bind(this);

        this.state = {
            playPauseButton: "play_white.png",
            loveButton: "love.png"
        }
    }

    // Display appropriate "like" button based user action
    toggleLove() {
        this.state.loveButton === "love.png" ? this.setState({ loveButton: "love_filled_green.png" }) : this.setState({ loveButton: "love.png" })
        // this.setState({ loveButton: "love.png" ? "love_filled_green.png" : "love.png" })
    }

    // Logic for audio controls
    playAudio() {
        const music = document.getElementById("audio");
        if (music.paused) {
            music.play();
            this.setState({ playPauseButton: "pause_white.png" })
            // const volume = document.querySelector("audio").volume; // 1 
            // console.log(volume);
        } else {
            music.pause();
            this.setState({ playPauseButton: "play_white.png" })
        }
    }

    volChange() {
        let audio = document.querySelector("audio");
        let range = document.getElementById("myRange");
        audio.volume = (range.value / 100);
        console.log(audio.volume);

    }
        
    // Update playhead position based on duration
    // timeUpdate() {
    //     let duration;
    //     let music = document.getElementById('playhead');

    //     music.addEventListener("timeupdate", timeUpdate, false);
    //     let playPercent = 100 * (music.currentTime / duration);
    //     playhead.style.marginLeft = playPercent + "%";

    //     music.addEventListener("canplaythrough", function () {
    //         duration = music.duration;
    //     }, false);
    // }
    

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
                            <button id="love-button" onClick={ this.toggleLove }>
                                <img id="love" src={ this.state.loveButton }/>
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
                        <div id="timeline">
                            <div id="playhead"></div>
                        </div>
                        <audio id="audio"><source src="skylines.mp3"/></audio>
                    </div>
                    
                   

                    {/* <ReactAudioPlayer id="react-audio"
                        src="skylines.mp3"
                        controls
                    /> */}

                    {/* TODO: Decide what's going on the right-hand side of the now-playing bar*/}
                    <div className="now-playing-right">
                        <div className="slidecontainer">
                            <input type="range" min="1" max="100" defaultValue="1" className="slider" id="myRange" onChange={ this.volChange }></input>                
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default Player;