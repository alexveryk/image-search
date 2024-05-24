import { Component } from "react";
import "./ImageGalleryItem.css";
import { Modal } from "../Modal/Modal";

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    largeImageURL: "",
  };

  toogleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
    console.log(this.state.isModalOpen);
  };

  handleModalOpen = (evt) => {
    this.toogleModal();
    this.setState({
      largeImageURL: evt.target.dataset.largeimageurl,
      isModalOpen: true,
    });
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
            onClose={this.toogleModal}
          />
        )}
      </>
    );
  }
}
