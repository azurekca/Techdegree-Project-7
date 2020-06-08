import React, { Component } from 'react';
import { withRouter } from 'react-router';
import SearchSVG from './SearchSVG';

class SearchForm extends Component {

  searchInput = React.createRef();
  
  handleSubmit = event => {
    // prevent page refresh; call fetch with search term
    event.preventDefault();
    // this.props.performSearch(this.searchInput.current.value);

    // save search to history
    const path = `/search/${this.searchInput.current.value}`;
    console.log(path);
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