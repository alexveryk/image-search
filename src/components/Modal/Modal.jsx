import { Component } from "react";
import "./modal.css";
import { createPortal } from "react-dom";

const modal = document.querySelector("#modal-root");

export class Modal extends Component {

   componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  handleButtonClick = () => {
    this.props.onClose();
  };

  render() {
    const { largeImageURL, toogleModal } = this.props;
    return createPortal(
      <div className="overlay"  onClick={this.handleBackdropClick}>
        <div className="modal">
          <button className="button-close" type="button" onClick={this.handleButtonClick}>
           X
          </button>
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      modal
    );
  }
}
