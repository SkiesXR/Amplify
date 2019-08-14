import { connect } from 'react-redux';
import { Player } from './player';
import { toggleSong } from '../../actions/player_actions';

const msp = state => {
    return {
        nowPlaying: state.ui.nowPlaying
    };
};

const mdp = dispatch => ({
    toggleSong: () => (dispatch(toggleSong()))
});

export default connect(msp, mdp)(Player);