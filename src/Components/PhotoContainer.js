import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class ImageContainer extends Component {

  render() {
    const photos = this.props.photos
    let jsx;
    let title;
    
    if (photos.length > 0) {
      title = 'Results'
      jsx = photos.map(photo => {
        console.log(photo);
        return <Photo photo={photo} key={photo.id}/>
      })
    } else {
      title='Sorry...'
      jsx = <NotFound />
    }

    return (
      <main className="photo-container">
        <h2>{title}</h2>
        <ul>
          {jsx}
        </ul>
      </main>
    );
  };
}

export default ImageContainer;