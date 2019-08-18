import React from "react";
import ProgressBar from "./progress-bar";
import ReactAudioPlayer from "react-audio-player";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repeat: false,
      shuffle: false,
      shuffle: false,
      active: props.currentSong,
      current: 0,
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
      queue: props.queue
    };

    // Let's bind some methods!
    this.toggleAudio = this.toggleAudio.bind(this);
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
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.repeat = this.repeat.bind(this);

    // Refs
    this.rangeslider = React.createRef();
    this.rangesliderFill = React.createRef();
    this.rangesliderHandle = React.createRef();
    this.audio = React.createRef();
  }

  componentWillMount() {
    this.refs = {};
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentSong.audio_file != this.props.currentSong.audio_file ||
      prevProps.queue != this.props.queue
    ) {
      clearInterval(this.intervalId);
      this.setState({
        active:
          Object.keys(this.props.queue).length > 0
            ? this.props.queue[1]
            : this.props.currentSong
      });
      this.setAudioSource();
      this.setState({
        active: this.props.queue[1],
        currentTime: 0,
        playheadPos: 0,
        playPauseButton: "pause_white.png"
      });
      this.setSongPlaying(true);
    }
    if (prevProps.playing != this.props.playing) {
      this.setSongPlaying(this.props.playing);
    }
  }

  componentDidMount() {
    let track;
    let that = this;
    var id = null;
    track = document.querySelector("#audio");

    // When user clicks "play", start counter & progress the bar
    track.addEventListener("play", () => {
      this.intervalId = setInterval(function() {
        var progress = that.timeUpdate();
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
      if (this.state.repeat) {
        this.setSongPlaying(true);
      } else {
        this.next();
      }
    });
  }

  timeUpdate() {
    // Convert track duration to seconds
    let length = this.props.currentSong.length;
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
        this.likedSongMessage("add");
        break;
      case "love_filled_green.png":
        this.setState({
          loveButton: "love.png",
          loveId: "love"
        });
        this.likedSongMessage("remove");
        break;
    }
  }

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

  // update audio source for audio element
  setAudioSource() {
    const music = document.getElementById("audio");
    music.src = this.props.currentSong.audio_file;
  }

  // update
  setSongPlaying(isPlaying) {
    const music = document.getElementById("audio");
    if (isPlaying) {
      music.play();

      // Swap "pause" icon for "play icon"
      this.setState({
        playPauseButton: "pause_white.png"
      });
    } else {
      music.pause();
      clearInterval(this.intervalId);
      this.setState({
        playPauseButton: "play_white.png",
        playing: false
      });
    }
  }

  // toggle audio playing status
  toggleAudio() {
    this.props.toggleSong();
    clearInterval(this.intervalId);
  }

  // Volume controller
  volChange(e) {
    let range = e.currentTarget;
    let audio = document.getElementById("audio");
    audio.volume = range.value / 100;
    this.setState({
      volPos: range.value
    });
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
    let length = this.props.currentSong.length;
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

  next() {
    let queueSize = this.props.queue.length;
    let current =
      this.state.repeat === true
        ? this.state.current
        : this.state.current < queueSize - 1
        ? this.state.current + 1
        : 0;
    let active = this.props.queue[current];

    this.setState({
      current: current,
      active: active,
      currentTime: 0,
      playheadPos: 0
    });
    this.props.setCurrentSong(active);
    this.setAudioSource();
    this.setSongPlaying(true);
  }

  previous() {
    let queueSize = this.props.queue.length;
    let current =
      this.state.current > 0 ? this.state.current - 1 : queueSize - 1;
    let active = this.props.queue[current];

    this.setState({
      current: current,
      active: active,
      currentTime: 0,
      playheadPos: 0
    });
    this.props.setCurrentSong(active);
    this.setAudioSource();
    this.setSongPlaying(true);
  }

  randomize(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffle() {
    // let shuffleQ = this.props.queue.slice().sort(() => Math.random() - 0.5);
    let shuffleQ = this.randomize(this.props.queue.slice());
    this.setState({ shuffle: !this.state.shuffle });
    if (this.state.shuffle) this.props.setQueue(shuffleQ);
  }

  repeat() {
    this.setState({ repeat: !this.state.repeat });
  }

  render() {
    return (
      <div className="player">
        {/* Audio element */}
        <audio id="audio">
          <source
            src={this.props.currentSong.audio_file}
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
                backgroundImage: `url(${this.props.currentSong.album_art})`
              }}
            />
            <div className="np-container">
              <a id="npt" href="">
                {this.props.currentSong.title}
              </a>
              <div className="now-playing-text" />
              <a id="npa" href="">
                {this.props.currentSong.artist}
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
                <button id="np-button" onClick={this.shuffle}>
                  {/* <img id="shuffle" src="shuffle_white.png" /> */}
                  <img
                    id="shuffle"
                    src={
                      this.state.shuffle
                        ? "shuffle_neon.png"
                        : "shuffle_white.png"
                    }
                  />
                </button>

                {/* back button */}
                <button id="np-button">
                  <img
                    id="direction-backward"
                    src="previous_white.png"
                    onClick={this.previous}
                  />
                </button>

                {/* play / pause buttons */}
                <button
                  onClick={
                    this.state.playPauseButton === "play_white.png"
                      ? () => this.setSongPlaying(true)
                      : () => this.setSongPlaying(false)
                  }
                  id="np-button"
                >
                  <img id="play" src={this.state.playPauseButton} />
                  {/* <img id="play" src="play_white.png" /> */}
                </button>

                {/* next button */}
                <button id="np-button">
                  <img
                    id="direction-forward"
                    src="next_white.png"
                    onClick={this.next}
                  />
                </button>

                {/* repeat button */}
                <button id="np-button" onClick={this.repeat}>
                  {/* <img id="repeat" src="repeat_white.png" /> */}
                  <img
                    id="repeat"
                    src={
                      this.state.repeat
                        ? "repeat_green.png"
                        : "repeat_white.png"
                    }
                  />
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
            <div className="duration">{this.props.currentSong.length}</div>
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
