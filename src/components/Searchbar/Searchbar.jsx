import { Component } from "react";
import "./searchbar.css";

export class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.imageName(this.state.searchValue);
    this.setState({ searchValue: "" });
  };

  handleChange = (evt) => {
    this.setState({ searchValue: evt.target.value });
  };

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
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
