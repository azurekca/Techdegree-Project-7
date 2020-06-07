import React, { Component } from 'react';
import SearchSVG from './SearchSVG';

class SearchForm extends Component {

  searchInput = React.createRef();
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.performSearch(this.searchInput.current.value);
    console.log(this.searchInput.current.value);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          ref={this.searchInput}
          type="search"
          name="search"
          placeholder="Search"
          required/>
        <button type="submit" className="search-button">
          <SearchSVG />
        </button>
      </form>
    );
  };
}

export default SearchForm;