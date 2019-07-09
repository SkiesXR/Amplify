import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftNav from './left-nav';
import MainDiscover from './main-discover';
import Player from './player';


class DiscoverPlayer extends React.Component {

    render() {


        return (

            <div className="player-container">
                <LeftNav />
                <Player />
                <MainDiscover />
            </div>
        );
    }
}

export default withRouter(DiscoverPlayer);