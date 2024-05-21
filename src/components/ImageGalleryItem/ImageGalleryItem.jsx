import { Component } from "react";
import "./ImageGalleryItem.css";

export class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;
    return (
      <li className="imageGalleryItem">
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    );
  }
}
