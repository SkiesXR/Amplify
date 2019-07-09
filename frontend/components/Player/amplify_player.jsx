import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftNav from './left-nav';
import Main from './main';
import Player from './player';


class AmplifyPlayer extends React.Component {

    render() {  

        return (
            
            <div className="player-container">
                <LeftNav currentUser={this.props.currentUser.username}/>
                <Player />
                <Main 
                />                
            </div>
        );
    }
}

export default withRouter(AmplifyPlayer);