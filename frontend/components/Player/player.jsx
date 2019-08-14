import React from "react";
import ProgressBar from "./progress-bar";
import ReactAudioPlayer from "react-audio-player";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: this.props.playing || false,
      currentSong: null,
      repeat: false,
      shuffle: false,
      playheadPos: 0,
      volPos: 50,
      previousVolume: 0.5,
      volume: 0.5,
      currentTime: 0,
      playPauseButton: "play_white.png",
      loveButton: "love.png",
      loveId: "love",
      likedSongMessage: null,
      likedSongMessageClass: "likedSongMessageInactive",
      muteIcon: "max_volume_gray.png",
      track: {
        title: "Skylines",
        src: "skylines.mp3",
        duration: "03:09",
        artist: "Animalfirepower",
        artwork:
          "https://amplifyskiesxr-seeds.s3-us-west-1.amazonaws.com/Album+Photos/AFP+-+Skylines.jpg"
      }
    };

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
    this.toggleMute = this.toggleMute.bind(this);

    // Refs
    this.rangeslider = React.createRef();
    this.rangesliderFill = React.createRef();
    this.rangesliderHandle = React.createRef();
    this.audio = React.createRef();
  }

  componentWillMount() {
    this.refs = {};
  }

  componentDidMount() {
    debugger;
    let track;
    let that = this;
    var id = null;
    track = document.querySelector("#audio");

    // When user clicks "play", start counter & progress the bar
    track.addEventListener("play", () => {
      id = setInterval(function() {
        var progress = that.timeUpdate();
        console.log(`playheadPos: ${that.state.playheadPos}`);
        console.log(`currentTime: ${that.state.currentTime}`);
        console.log(`track current time: ${track.currentTime}`);
        that.setState(prevState => {
          return {
            currentTime: prevState.currentTime + 1,
            playheadPos: progress
          };
        });
      }, 1000);
      let rangeslider;
      let ratio;
      let position;
      rangeslider = that.rangeslider;
      ratio = that.state.currentTime / that.timeUpdate();
      position = rangeslider.current.offsetWidth * ratio;
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
      });
    });
  }

  timeUpdate() {
    // Convert track duration to seconds
    let length = this.state.track.duration;
    let minFirstDigit = length[0];
    let minutes =
      parseInt(minFirstDigit, 10) > 0
        ? parseInt(length.slice(0, 2))
        : parseInt(length.slice(1, 2));
    let seconds = parseInt(length.slice(3));
    let duration = minutes * 60 + seconds;
    return (this.state.currentTime / duration) * 100;
  }

  // Display appropriate "like" button based user action
  toggleLove() {
    switch (this.state.loveButton) {
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
    switch (action) {
      case "add":
        this.setState({
          likedSongMessage: "Added to your Liked Songs",
          likedSongMessageClass: "likedSongMessage"
        });
        setTimeout(() => {
          this.setState({
            likedSongMessageClass: "likedSongMessageInactive"
          });
        }, 3000);
        break;
      case "remove":
        this.setState({
          likedSongMessage: "Removed from your Liked Songs",
          likedSongMessageClass: "likedSongMessage"
        });
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
        play: true
      });
    } else {
      // Pause current track
      music.pause();
      if (id) {
        debugger;
        clearInterval(id);
      }
      // Swap "play" icon for "pause icon"
      this.setState({
        playPauseButton: "play_white.png",
        play: false
      });
    }
  }

  // Volume controller
  volChange(e) {
    let range = e.currentTarget;
    let audio = document.getElementById("audio");
    audio.volume = range.value / 100;
    this.setState({
      volPos: range.value
    });
    // console.log(audio.volume);
    audio.muted = audio.volume <= 0.01 ? true : false;
  }

  // Obtain timestamp and convert for displaying track's current time
  convertTime(timestamp) {
    let mins = Math.floor(timestamp / 60);
    let secs = timestamp - mins * 60;
    if (secs < 10) secs = `0${secs}`;
    timestamp = `${mins}:${secs}`;
    return timestamp;
  }

  // control the position of the progress bar playhead using the mouse
  positionHandle(position) {
    let rangeslider;
    let rangesliderHandle;
    let progressbarWidth;
    rangeslider = document.querySelector(".rangeslider");
    rangesliderHandle = this.rangesliderHandle.current.offsetWidth;
    progressbarWidth = rangeslider - rangesliderHandle;

    // Left position of the handle
    let handleLeft = position - rangeslider.offsetLeft;

    if (handleLeft >= 0 && handleLeft <= progressbarWidth) {
      this.setState({
        playheadPos: handleLeft
      });
    }
    if (handleLeft < 0) {
      this.setState({
        playheadPos: 0
      });
    }
    if (handleLeft > progressbarWidth) {
      this.setState({
        playheadPos: progressbarWidth
      });
    }
  }

  // update the time elapsed based on the position of the progress bar playhead
  mouseMove(e) {
    let rangeslider = this.rangeslider.current.offsetWidth;
    this.positionHandle(e.pageX);
    let length = this.state.track.duration;
    let minFirstDigit = length[0];
    let minutes =
      parseInt(minFirstDigit, 10) > 0
        ? parseInt(length.slice(0, 2))
        : parseInt(length.slice(1, 2));
    let seconds = parseInt(length.slice(3));
    let duration = minutes * 60 + seconds;
    let newTime = Math.floor(
      ((e.pageX - this.rangeslider.current.offsetLeft) / rangeslider) * duration
    );
    this.setState({
      currentTime: newTime
    });
    document.getElementById("audio").currentTime = newTime;
  }

  mouseUp(e) {
    window.removeEventListener("mousemove", this.mouseMove);
    window.removeEventListener("mouseup", this.mouseUp);
  }

  mouseDown(e) {
    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("mouseup", this.mouseUp);
  }

  // mute & unmute audio
  toggleMute() {
    let audio = document.getElementById("audio");
    if (audio.muted === false) {
      this.setState({
        previousVolume: this.state.volPos,
        volPos: 0
      });
      audio.muted = true;
    } else {
      audio.volume = this.state.previousVolume / 100;
      let volPos = this.state.previousVolume;
      this.setState({
        volPos
      });
      audio.muted = false;
    }
  }

  render() {
    return (
      <div className="player">
        {/* Audio element */}
        <audio id="audio">
          <source
            src={this.state.track.src}
            ref={audio => (this.audio = audio)}
            currentTime={this.state.currentTime}
          />
        </audio>

        <div id="now-playing-bar">
          {/* left side */}
          <div className="now-playing-left">
            <div
              className="thumb-image"
              style={{
                backgroundImage: `url(${this.state.track.artwork})`
              }}
            />
            <div className="np-container">
              <a id="npt" href="">
                {this.state.track.title}
              </a>
              <div className="now-playing-text" />
              <a id="npa" href="">
                {this.state.track.artist}
              </a>
            </div>
            <div className="love-container">
              <div className="tooltip">Save to your Liked Songs</div>
              <button id="love-button" onClick={this.toggleLove}>
                <img id={this.state.loveId} src={this.state.loveButton} />
              </button>
            </div>
          </div>

          {/* Player Controls */}
          <div className="now-playing-controls-container">
            <div className="currentTime">
              {this.convertTime(this.state.currentTime)}
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
                  <img id="play" src={this.state.playPauseButton} />
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

              <div
                className="rangeslider"
                onClick={this.mouseMove}
                ref={this.rangeslider}
              >
                <div
                  className="rangeslider_fill"
                  ref={this.rangesliderFill}
                  style={{ width: `${this.state.playheadPos}%` }}
                />
                <div
                  className="rangeslider_handle"
                  onMouseDown={this.mouseDown}
                  ref={this.rangesliderHandle}
                  style={{ left: `${this.state.playheadPos}%` }}
                />
              </div>
            </div>
            <div className="duration">{this.state.track.duration}</div>
          </div>

          {/* Mute Icon */}
          <div className="mute-icon-container">
            <button onClick={this.toggleMute}>
              <img id="mute-icon" src={this.state.muteIcon} />
            </button>
          </div>

          {/* Volume Slider */}
          <div className="now-playing-right">
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.volPos}
                className="slider"
                id="myRange"
                onChange={this.volChange}
              />
            </div>
          </div>
        </div>
        <span
          id="likedSongMessage"
          className={this.state.likedSongMessageClass}
        >
          {this.state.likedSongMessage}
        </span>
      </div>
    );
  }
}

export default Player;

// DEBUG: Progress bar handle movement is on an interval
