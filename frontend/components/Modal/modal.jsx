import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import NewPlaylist from "../Playlists/new_playlist";
import AddTrackToPlaylist from "../Playlists/Add_Track_To_Playlist";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { modal, closeModal } = this.props;

    if (!modal) {
      return null;
    }

    let component;
    switch (modal.modal) {
      case "new_playlist":
        component = <NewPlaylist />;
        return (
          <div className="modal-background">
            <div className="modal-child-np" onClick={e => e.stopPropagation()}>
              {component}
            </div>
          </div>
        );
        break;
      case "addTrackToPlaylist":
        component = <AddTrackToPlaylist />;
        return (
          <div className="modal-background">
            <div className="modal-child-asp" onClick={e => e.stopPropagation()}>
              {component}
            </div>
          </div>
        );
        break;
      default:
        return null;
    }
  }
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  msp,
  mdp
)(Modal);
