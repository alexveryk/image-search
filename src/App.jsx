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

  async componentDidUpdate(prevProps, prevState) {
    if(prevState.imageName !== this.state.imageName || prevState.page !== this.state.page){
console.log("Щось змінилось , пошукове поле або номер сторінки ")
try {
  this.state.isLoading = true;
const responce = await getImage(this.state.imageName, this.state.page);
console.log(responce.data.hits);
this.setState({images: responce.data.hits})
console.log('STATE: ',this.state)
  
} catch (error) {
  console.log(error)
} finally {
  this.state.isLoading = false;

}
    }
  }

  handleChange = (evt) => {
    this.setState({ imageName: evt.target.value });
  }

  handleFormReset = () => {
    this.setState({imageName: ""})
  }


  render() {
    return (
      <div className="App">
        <Searchbar handleChange={this.handleChange} imageName={this.state.imageName} resetForm={this.handleFormReset}/>
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}
