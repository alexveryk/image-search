import { Component } from "react";
import "./searchbar.css";

export class Searchbar extends Component {

 state = {
      searchTerm: ""
    };
 

  handleChange = (evt) => {
    this.setState({ searchTerm: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.searchTerm); 
  } 

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchFormButton">
            <span className="searchFormButtonLabel">Search</span>
          </button>

          <input
            className="searchFormInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
