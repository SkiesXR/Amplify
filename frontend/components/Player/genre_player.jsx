import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftNav from './left-nav';
import MainGenres from './main-genres';
import Player from './player';


class GenrePlayer extends React.Component {

    render() {


        return (

            <div className="player-container">
                <LeftNav />
                <Player />
                <MainGenres />
            </div>
        );
    }
}

export default withRouter(GenrePlayer);