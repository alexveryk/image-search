import { Component } from "react";
import "./ImageGalleryItem.css";
import { Modal } from "../Modal/Modal";

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    largeImageURL: "",
  };

  addScrollLock = () => {
    document.documentElement.style.overflow = 'hidden';
  };

  removeScrollLock = () => {
    document.documentElement.style.overflow = '';
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  handleModalOpen = (evt) => {
    this.addScrollLock();
    this.setState({
      largeImageURL: evt.target.dataset.largeimageurl,
      isModalOpen: true,
    });
  };

  handleModalClose = () => {
    this.removeScrollLock();
    this.setState({ isModalOpen: false });
  };

  render() {
    const { image } = this.props;
    return (
      <>
        <li className="imageGalleryItem">
          <img
            src={image.webformatURL}
            alt={image.tags}
            data-largeimageurl={image.largeImageURL}
            onClick={this.handleModalOpen}
          />
        </li>
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.handleModalClose}
          />
        )}
      </>
    );
  }
}
