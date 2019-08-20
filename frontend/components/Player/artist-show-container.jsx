import { connect } from "react-redux";
import ArtistShow from "./artist-show";
import { fetchArtist } from "../../actions/artist.actions";
import {
  setCurrentSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";

const msp = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.artistId]
  };
};

const mdp = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id)),
  setQueue: queue => dispatch(setQueue(queue)),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  setPlaying: playing => dispatch(setPlaying(playing))
});

export default connect(
  msp,
  mdp
)(ArtistShow);
