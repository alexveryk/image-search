import { Component } from "react";
import "./searchbar.css";

export class Searchbar extends Component {
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.props.imageName);
    this.props.resetForm() 
    
  } 

  render() {
   const {handleChange, imageName} = this.props
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
            value={imageName}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}
