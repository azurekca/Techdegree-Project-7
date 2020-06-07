import React, { Component} from 'react';
import {
  BrowserRouter
 
} from 'react-router-dom';

// React Components
import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <SearchForm />
        <MainNav />
        <PhotoContainer />
      </BrowserRouter>

    );
  };
}

export default App;
