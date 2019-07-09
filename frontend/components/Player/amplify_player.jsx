import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftNav from './left-nav';
import Main from './main';
import Player from './player';


class AmplifyPlayer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {

        const artists = this.props.artists.map(artist => {
            return <li>{ artist.name }</li>
        });   

        return (
            
            <div className="player-container">
                <LeftNav />
                <Player />
                <Main 
                    artists={ artists }
                    currentUser={this.props.currentUser.username}
                />                
            </div>
        );
    }
}

export default withRouter(AmplifyPlayer);