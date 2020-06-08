import React, { Component } from 'react';
import { withRouter } from 'react-router';
import SearchSVG from './SearchSVG';

class SearchForm extends Component {

  searchInput = React.createRef();
  
  handleSubmit = event => {
    // prevent page refresh
    event.preventDefault();

    // perform search by adding search to history
    // this works by setting loading state to true; triggers re-render
    // PhotoContainer handles updated url and triggers fetching new data 
    const path = `/search/${this.searchInput.current.value}`;
    this.props.handleLoading();
    this.props.history.push(path);

    // reset form input
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

export default withRouter(SearchForm);