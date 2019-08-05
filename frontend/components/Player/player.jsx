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

        // Refs
        this.rangeslider = React.createRef();
        this.rangesliderFill = React.createRef();
        this.rangesliderHandle = React.createRef();
        this.audio = React.createRef();
        // this.duration = React.createRef();
        // this.barMovement = this.barMovement.bind(this);
        // const audio = <audio id="audio"><source src="skylines.mp3" /></audio>
        // const duration = audio.duration;

        this.state = {
            play: false,
            track: {
                title: "Skylines",
                src: "skylines.mp3",
                duration: "03:09",
                artist: "Animalfirepower",
                artwork: "https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Skylines.jpg"
            },
            // updateTime: function (timestamp) {
            //     timestamp = Math.floor(timestamp);
            //     this.setState({ currentTime: timestamp });
            // },
            playheadPos: "0px",
            currentTime: 0,
            playPauseButton: "play_white.png",
            currentSong: null,
            loveButton: "love.png",
            loveId: "love",
            likedSongMessage: null,
            likedSongMessageClass: "likedSongMessageInactive",
        }
    }

    componentWillMount() {
        this.refs = {}
    }

    componentDidMount() {
        let track;
        track = document.querySelector('#audio');
        let that = this;
        var id = null;

        // When user clicks "play", start counter
        track.addEventListener("play", () => {
            id = setInterval(function () {
                that.setState((prevState) => {
                    return { currentTime: prevState.currentTime + 1 }
                });
            }, 1000);
            // console.log("time updated");
            let rangeslider;
            rangeslider = document.querySelector('.rangeslider');
            let ratio = track.currentTime / track.duration;
            let position = rangeslider.offsetWidth * ratio;
            this.positionHandle(position);
        });

        // When user clicks "pause", pause counter
        track.addEventListener("pause", () => {
            clearInterval(id);
    });
}


    
    timeUpdate() {
        // debugger;
        // let ratio = this.audio.current.currentTime / this.audio.current.duration;
        // let position = this.rangeslider.current.offsetWidth * ratio;
        // this.positionHandle(position);
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

    // Progress Bar Movement
    // barMovement() {
    //     this.setState({
    //         playheadPos: playheadPos += 1
    //     });
    // }

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
            
            // Every second, move progress bar's playhead forward
            // setInterval(barMovement(), 1000);
            // setInterval(function() {
            //     id = that.setState((prevState) => {
            //         return { currentTime: prevState.currentTime + 1 }
            //     });
            // }, 1000);
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

    // Obtain track duration from state and convert for displaying track's current time
    convertTime(timestamp) {
        // let length = this.state.track.duration;
        // let minFirstDigit = length[0];
        // let minutes = parseInt(minFirstDigit, 10) > 0 ? parseInt(length.slice(0,2)) : parseInt(length.slice(1,2));
        // let seconds = parseInt(length.slice(3));
        // let duration = (minutes * 60) + seconds; 
        let minutes = Math.floor(timestamp / 60);
        let seconds = timestamp - (minutes * 60);
        if (seconds < 10) seconds = `0${seconds}`;
        timestamp = `${minutes}:${seconds}`;
        return timestamp;
    }

    positionHandle(position) {
        let rangeslider;
        let rangesliderHandle;
        let progressbarWidth;
        rangeslider = document.querySelector('.rangeslider').offsetWidth;
        rangesliderHandle = document.querySelector('.rangeslider_handle').offsetWidth;
        // console.log("handling position");
        progressbarWidth = rangeslider - rangesliderHandle;

        // Left position of the handle
        let handleLeft = position - rangeslider.offsetLeft;

        if (handleLeft >= 0 && handleLeft <= progressbarWidth) {
            // this.rangesliderHandle.current.style.left = handleLeft + "px";
            this.setState({
                playheadPos: `${handleLeft}px`
            }); 
        }
        if (handleLeft < 0) {
            // this.rangesliderHandle.current.style.left = "0px";
            this.setState({
                playheadPos: "0px"
            }); 
        }
        if (handleLeft > progressbarWidth) {
            // this.rangesliderHandle.current.style.left = progressbarWidth + "px";
            this.setState({
                playheadPos: `${progressbarWidth}px`
            }); 
        }
    }

    mouseMove(e) {
        let rangeslider;
        rangeslider = document.querySelector('.rangeslider');
        this.positionHandle(e.pageX);
        let track;
        track = document.querySelector('#audio');
        track.currentTime = (e.pageX / rangeslider.offsetWidth) * track.duration;
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
                                <div className="rangeslider_fill" ref={ this.rangesliderFill }></div>
                                <div className="rangeslider_handle" onMouseDown={ this.mouseDown } ref={ this.rangesliderHandle } style={ { left: this.state.playheadPos } }></div>
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

// TODO: Display current time in correct format
// TODO: Add mute button
// TODO: Get progress bar working
// TODO: Progress bar handle position controls current time display

