import { Component } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { getImage } from "./API/api";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    imageName: "",
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const responce = await getImage(this.state.imageName, this.state.page);
        console.log(responce);
        this.setState((prevState) => ({
          images: [...prevState.images, ...responce.data.hits],
          totalHits: responce.data.totalHits,
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  setImageName = (ImageName) => {
    this.setState({ imageName: ImageName, page: 1, images: [] });
  };

  handlePageChange = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar imageName={this.setImageName} />
        {this.state.images.length > 0 ? (
          <ImageGallery images={this.state.images} />
        ) : (
          <p>Newer images find</p>
        )}
        {this.state.isLoading && <Loader />}{" "}
        {this.state.images.length < this.state.totalHits && (
          <Button page={this.handlePageChange} />
        )}
      </div>
    );
  }
}
