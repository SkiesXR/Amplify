import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftNav from './left-nav';
import Main from './main';
import Player from './player';


class AmplifyPlayer extends React.Component {

    render() {  

        const { currentUser, logout } = this.props;
        return (
            
            <div className="player-container">
                <LeftNav currentUser={ currentUser.username } logout={ logout }/>
                <Player />
                <Main 
                />                
            </div>
        );
    }
}

export default withRouter(AmplifyPlayer);