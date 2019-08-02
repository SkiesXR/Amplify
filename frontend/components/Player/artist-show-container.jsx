import { connect } from 'react-redux';
import ArtistShow from './artist-show';
import { fetchArtist } from '../../actions/artist.actions';

const msp = (state, ownProps) => {
    return {
        artist: state.entities.artists[ownProps.match.params.artistId]
    }
};

const mdp = dispatch => ({
    fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(msp, mdp)(ArtistShow);