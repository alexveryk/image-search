import { Component } from "react";
import "./ImageGallery.css";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className="imageGallery">
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}
