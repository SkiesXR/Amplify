import React from 'react';


class Player extends React.Component {

    render() {

        return (
            <div className="player">
                <div id="now-playing-bar">
                    <div className="now-playing-left">
                        <div className="thumb-image"></div>
                        <div className="np-container">
                            <a id="npt" href="">Track</a>
                            <div className="now-playing-text">
                        </div>
                            <a id="npa" href="">Artist Name</a>
                        </div>
                        <div class="love-container">
                            <button id="love-button">
                                <img id="love" src="love.png"/>
                            </button>
                        </div>
                    </div>
                    <div className="now-playing-controls">

                    </div>
                    <div className="now-playing-right">
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;