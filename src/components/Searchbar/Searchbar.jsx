import { Component } from "react";
import "./searchbar.css";

export class Searchbar extends Component {
  render() {
    return (
      <header className="searchbar">
        <form className="searchForm">
          <button type="submit" className="searchFormButton">
            <span className="searchFormButtonLabel">Search</span>
          </button>

          <input
            className="searchFormInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
