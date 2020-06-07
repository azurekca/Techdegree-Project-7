import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class ImageContainer extends Component {

  render() {
    return (
      <main class="photo-container">
        <h2>Results or No Results</h2>
        <ul>
          {/* Photos */}
          <Photo />
          <NotFound />
        </ul>
      </main>
    );
  };
}

export default ImageContainer;