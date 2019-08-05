import React from 'react';
import ProgressBar from './progress-bar';
import ReactAudioPlayer from 'react-audio-player';

class Player extends React.Component {

    constructor(props) {
        super(props);

        // Let's bind some methods!
        this.playAudio = this.playAudio.bind(this);
        this.volChange = this.volChange.bind(this);
        this.toggleLove = this.toggleLove.bind(this);
        this.likedSongMessage = this.likedSongMessage.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.timeUpdate = this.timeUpdate.bind(this);
        this.convertTime = this.convertTime.bind(this);
        this.positionHandle = this.positionHandle.bind(this);

        // Refs
        this.rangeslider = React.createRef();
        this.rangesliderFill = React.createRef();
        this.rangesliderHandle = React.createRef();
        // this.audio = React.createRef();
        // this.barMovement = this.barMovement.bind(this);

        this.state = {
            play: false,
            playheadPos: 0,
            currentTime: 0,
            playPauseButton: "play_white.png",
            currentSong: null,
            loveButton: "love.png",
            loveId: "love",
            likedSongMessage: null,
            likedSongMessageClass: "likedSongMessageInactive",
            track: {
                title: "Skylines",
                src: "skylines.mp3",
                duration: "03:09",
                artist: "Animalfirepower",
                artwork: "https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Skylines.jpg"
            }
        }
    }

    componentWillMount() {
        this.refs = {}
    }

    componentDidMount() {
        let track;
        let that = this;
        var id = null;
        track = document.querySelector('#audio');

        // When user clicks "play", start counter & progress the bar
        track.addEventListener("play", () => {
            id = setInterval(function () {
                var progress = that.timeUpdate();
                // console.log(`playheadPos: ${that.state.playheadPos}`);
                // console.log(`currentTime: ${that.state.currentTime}`);
                that.setState((prevState) => {
                    return { 
                        currentTime: prevState.currentTime + 1,
                        playheadPos: progress
                     }
                });
            }, 1000);
            // console.log("time updated");
            let rangeslider;
            let ratio;
            let position;
            // rangeslider = document.querySelector('.rangeslider');
            rangeslider = that.rangeslider;
            ratio = that.state.currentTime / that.state.track.duration;
            position = rangeslider.offsetWidth * ratio;
            that.positionHandle(position);
        });

        // When user clicks "pause", pause counter and suspend progress bar movement
        track.addEventListener("pause", () => {
            clearInterval(id);
        });

        // reset everything once track ends
        track.addEventListener("ended", () => {
            that.setState({
                currentTime: 0,
                playheadPos: 0,
                playPauseButton: "play_white.png"
            })
        });
}

    timeUpdate() {
        // Convert track duration to seconds
        let length = this.state.track.duration;
        let minFirstDigit = length[0];
        let minutes = parseInt(minFirstDigit, 10) > 0 ? parseInt(length.slice(0,2)) : parseInt(length.slice(1,2));
        let seconds = parseInt(length.slice(3));
        let duration = (minutes * 60) + seconds;
        // console.log(`Duration:${duration}`);
        return (this.state.currentTime / duration) * 100;
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

    // Logic for audio controls
    playAudio() {
        const music = document.getElementById("audio");
        var id = null;
        if (music.paused) {
            
            // Play current track
            music.play();   

            // Swap "pause" icon for "play icon"
            this.setState({ 
                playPauseButton: "pause_white.png",
                play: true,
            });
            // console.log("Attempted to move the bar!");
        } else {

            // Pause current track
            music.pause();
            if (id) {
                debugger;
                clearInterval(id);
                console.log("cleared interval!")
            }
            // Swap "play" icon for "pause icon"
            this.setState({
                playPauseButton: "play_white.png",
                play: false
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

    // Obtain timestamp and convert for displaying track's current time
    convertTime(timestamp) {
        let mins = Math.floor(timestamp / 60);
        let secs = timestamp - (mins * 60);
        if (secs < 10) secs = `0${secs}`;
        timestamp = `${mins}:${secs}`;
        return timestamp;
    }

    positionHandle(position) {
        debugger;
        // let rangeslider;
        // let rangesliderHandle;
        let progressbarWidth;
        let rangeslider = this.rangeslider.current.offsetWidth;
        let rangesliderHandle = this.rangesliderHandle.current.offsetWidth;
        // console.log("handling position");
        progressbarWidth = rangeslider - rangesliderHandle;

        // Left position of the handle
        let handleLeft = position - rangeslider.offsetLeft;

        if (handleLeft >= 0 && handleLeft <= progressbarWidth) {
            // this.rangesliderHandle.current.style.left = handleLeft + "px";
            this.setState({
                playheadPos: handleLeft
            }); 
        }
        if (handleLeft < 0) {
            // this.rangesliderHandle.current.style.left = "0px";
            this.setState({
                playheadPos: 0
            }); 
        }
        if (handleLeft > progressbarWidth) {
            // this.rangesliderHandle.current.style.left = progressbarWidth + "px";
            this.setState({
                playheadPos: progressbarWidth
            }); 
        }
    }

    mouseMove(e) {
        debugger;
        // let rangeslider;
        let rangeslider = this.rangeslider.current.offsetWidth;
        this.positionHandle(e.pageX);
        let length = this.state.track.duration;
        let minFirstDigit = length[0];
        let minutes = parseInt(minFirstDigit, 10) > 0 ? parseInt(length.slice(0, 2)) : parseInt(length.slice(1, 2));
        let seconds = parseInt(length.slice(3));
        let duration = (minutes * 60) + seconds;
        let newTime = (e.pageX / rangeslider.offsetWidth) * duration;
        this.setState({
            currentTime: newTime
        })
    };

    mouseUp(e) {
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('mouseup', this.mouseUp);
    };

    mouseDown(e) {
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('mouseup', this.mouseUp);
    };

    render() {

        return (

            <div className="player">
                <div id="now-playing-bar">

                    {/* left side */}
                    <div className="now-playing-left">
                        <div className="thumb-image" style={{ backgroundImage: `url(${this.state.track.artwork})` }}></div>
                        <div className="np-container">
                            <a id="npt" href="">{ this.state.track.title }</a>
                            <div className="now-playing-text">
                        </div>
                            <a id="npa" href="">{this.state.track.artist}</a>
                        </div>
                        <div className="love-container">
                            <div className="tooltip">Save to your Liked Songs</div>
                            <button id="love-button" onClick={ this.toggleLove }>
                                <img id={ this.state.loveId } src={ this.state.loveButton }/>
                            </button>
                        </div>
                    </div>


                    {/* Player Controls */}
                    <div className="now-playing-controls-container">
                        <div className="currentTime">
                            { this.convertTime(this.state.currentTime) }
                        </div>

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
                            <div className="rangeslider" onClick={ this.mouseMove } ref={ this.rangeslider } >
                                <div className="rangeslider_fill" ref={this.rangesliderFill} style={{ width: `${this.state.playheadPos}%` }}></div>
                                <div className="rangeslider_handle" onMouseDown={ this.mouseDown } ref={ this.rangesliderHandle } style={ { left: `${this.state.playheadPos}%` } }></div>
                            </div>
                            {/* <audio id="audio"><source src={ this.state.audioSrc } ref={ this.audio } onTimeUpdate={ this.timeUpdate }/></audio> */}
                            <audio id="audio"><source src={ this.state.track.src } ref={ this.audio } /></audio>
                            {/* { this.state.track } */}
                        </div>  
                        <div className="duration">
                            {this.state.track.duration}
                        </div>
                    </div>   

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

// TODO: Limit progress bar handler and fill from overshooting
// TODO: Fix issue where ending track time is less than duration
// TODO: Get progress bar draggable
// TODO: Progress bar handle position controls current time display
// TODO: Add mute button
// TODO: Playhead visible only on hover
// TODO: Green BG (progress bar) visible only on hover

