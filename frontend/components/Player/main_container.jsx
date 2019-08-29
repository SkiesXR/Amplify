import { connect } from "react-redux";
import { fetchArtists } from "../../actions/artist.actions";
import Main from "../Player/main";

const msp = state => {
  return {
    currentUser: state.entities.users[1],
    artists: Object.values(state.entities.artists),
    background: state.ui.background
  };
};

const mdp = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(
  msp,
  mdp
)(Main);
