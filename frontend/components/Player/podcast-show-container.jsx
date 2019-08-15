import { connect } from "react-redux";
import PodcastShow from "./podcast-show";

const msp = state => {
  return {};
};

const mdp = dispatch => ({});

export default connect(
  msp,
  mdp
)(PodcastShow);
