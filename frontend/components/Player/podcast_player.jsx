import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftNav from './left-nav';
import MainPodcast from './main-podcast';
import Player from './player';


class PodcastPlayer extends React.Component {

    render() {
   

        return (

            <div className="player-container">
                <LeftNav />
                <Player />
                <MainPodcast />
            </div>
        );
    }
}

export default withRouter(PodcastPlayer);