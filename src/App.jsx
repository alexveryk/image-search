import { Component } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { getImage } from "./API/api";

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    imageName: "",
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.page !== this.state.page ||
  //     prevState.imageName !== this.state.imageName
  //   ) {
  //     this.setState({ isLoading: true });
  //     try {
  //       const { page, imageName } = this.state;
  //       const fetchImage = await getImage(imageName, page);
  //       if (!fetchData.total) {
  //         console.log('No images found ');
  //         };
  //       }
  //     } catch (error) {
  //     this.setState({ error });
  //     } finally { 
  //        this.setState({ isLoading: false });
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Searchbar />
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}
