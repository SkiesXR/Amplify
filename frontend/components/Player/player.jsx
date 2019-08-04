import React from 'react';
import ProgressBar from './progress-bar';
import ReactAudioPlayer from 'react-audio-player';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
        this.volChange = this.volChange.bind(this);
        this.toggleLove = this.toggleLove.bind(this);
        this.likedSongMessage = this.likedSongMessage.bind(this);
        // this.barMovement = this.barMovement.bind(this);
        const audio = <audio id="audio"><source src="skylines.mp3" /></audio>

        this.state = {
            track: audio,
            playheadPos: 0,
            playPauseButton: "play_white.png",
            currentSong: null,
            loveButton: "love.png",
            loveId: "love",
            likedSongMessage: null,
            likedSongMessageClass: "likedSongMessageInactive",
        }
    }

    // Display appropriate "like" button based user action
    toggleLove() {
        switch(this.state.loveButton) {
            case "love.png":
                this.setState({
                    loveButton: "love_filled_green.png",
                    loveId: "love-green"
                });
                // console.log(`User liked a song!`);
                this.likedSongMessage("add");
                break;
            case "love_filled_green.png":
                this.setState({ 
                    loveButton: "love.png",
                    loveId: "love"
                });
                // console.log(`User removed a liked song!`);
                this.likedSongMessage("remove");
                break;
        }
    }

    // TODO: Add smooth fade in/out
    likedSongMessage(action) {
        switch(action) {
            case "add":
                // console.log("Displaying add song message");
                this.setState({
                    likedSongMessage: "Added to your Liked Songs",
                    likedSongMessageClass: "likedSongMessage",
                })
                setTimeout(() => {
                    this.setState({
                        likedSongMessageClass: "likedSongMessageInactive"
                    });
                }, 3000);
                break;
            case "remove":
                // console.log("Displaying remove song message");
                this.setState({
                    likedSongMessage: "Removed from your Liked Songs",
                    likedSongMessageClass: "likedSongMessage",
                })
                setTimeout(() => {
                    this.setState({
                        likedSongMessageClass: "likedSongMessageInactive"
                    });
                }, 3000);
                break;
        }
    }

    // Progress Bar Movement
    // barMovement() {
    //     this.setState({
    //         playheadPos: playheadPos += 1
    //     });
    // }

    // Logic for audio controls
    playAudio() {
        const music = document.getElementById("audio");
        if (music.paused) {

            // Play current track
            music.play();

            // Swap "pause" icon for "play icon"
            this.setState({ 
                playPauseButton: "pause_white.png"
                // playheadPos: 35
            });
            // console.log("Attempted to move the bar!");
            // let that = this;

            // Every second, move progress bar's playhead forward
            // setInterval(barMovement(), 1000);
            // setInterval(function() {
            //     this.setState({
            //         playheadPos: playheadPos += 1
            //     });
            // }, 1000);
        } else {

            // Pause current track
            music.pause();

            // Swap "play" icon for "pause icon"
            this.setState({
                playPauseButton: "play_white.png"
            });
        }
    }

    // Volume controller
    volChange() {
        let audio = document.querySelector("audio");
        let range = document.getElementById("myRange");
        audio.volume = range.value / 100;
        audio.muted = audio.volume === 0.01 ? true : false;
        console.log(`Audio Volume: ${audio.volume}`);
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

    // Track Duration
    // let length = track.length;
    // let minFirstDigit = length[0];
    // let minutes = parseInt(minFirstDigit, 10) > ? parseInt(length.slice(0,2)) : parseInt(length.slice(1,2));
    // let seconds = parseInt(length.slice(3));
    // let duration = (minutes * 60) + seconds;


    
    

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
                            <div className="tooltip">Save to your Liked Songs</div>
                            <button id="love-button" onClick={ this.toggleLove }>
                                <img id={ this.state.loveId } src={ this.state.loveButton }/>
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
                        {/* <div className="slidecontainer">
                            <input type="range" min="0" max="100" defaultValue="0" className="slider" id="progressBar"></input>
                        </div> */}
                        <div className="rangeslider">
                            <div className="rangeslider_fill"></div>
                            <div className="rangeslider_handle"></div>
                        </div>
                        {/* <audio id="audio"><source src="skylines.mp3"/></audio> */}
                        { this.state.track }
                    </div>                   

                    {/* <ReactAudioPlayer id="react-audio"
                        src="skylines.mp3"
                        controls
                    /> */}

                    {/* TODO: Decide what's going on the right-hand side of the now-playing bar*/}
                    <div className="now-playing-right">
                        <div className="slidecontainer">
                            <input type="range" min="0" max="100" defaultValue="50" className="slider" id="myRange" onChange={ this.volChange }></input>                
                        </div>
                    </div>
                </div>   
                <span id="likedSongMessage" className={this.state.likedSongMessageClass}>{this.state.likedSongMessage}</span>
             
            </div>
        );
    }
}

export default Player;