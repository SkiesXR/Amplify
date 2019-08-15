import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import NewPlaylist from "../Playlists/new_playlist";

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
        break;
      default:
        return null;
    }

    return (
      <div className="modal-background">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
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
