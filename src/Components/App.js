import React, { Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import API_KEY from '../config'

// React Components
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';



class App extends Component {

  state = {
		photos  : [],
		loading : true
	};

  	/* fetch method for getting the gif data */
	performSearch = (query) => {
	  fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
      .then(response => response.json())
	    .then(responseData => this.setState({photos: responseData.photos.photo}))
	    .catch(error => console.log('Error in fetching data', error))
	}
  
	// componentDidMount() {
	// 	this.performSearch();
	// }

  render() {
    return (

      <BrowserRouter>
        <SearchForm performSearch={this.performSearch}/>
        <MainNav />
        <PhotoContainer photos={this.state.photos}/>
      </BrowserRouter>

    );
  };
}

export default App;
