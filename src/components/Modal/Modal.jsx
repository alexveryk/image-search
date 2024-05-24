import { Component } from "react";
import "./modal.css";
import { createPortal } from "react-dom";

const modal = document.querySelector("#modal-root");

export class Modal extends Component {
  handleButtonClick = () => {
    this.props.onClose();
  };

  render() {
    const { largeImageURL, toogleModal } = this.props;
    return createPortal(
      <div className="overlay">
        <div className="modal">
          <button type="button" onClick={this.handleButtonClick}>
            Close
          </button>
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      modal
    );
  }
}
