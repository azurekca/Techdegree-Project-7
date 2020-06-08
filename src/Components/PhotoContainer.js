import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Photo from './Photo';

class PhotoContainer extends Component {

  componentDidUpdate() {
    const newQuery = this.props.match.params.query;
    const oldQuery = this.props.query;
    if (newQuery !== oldQuery) {
     console.log(this.props.match.params.query)
     this.props.performSearch(this.props.match.params.query);
    }
  }

  render() {
    const photos = this.props.photos
    let jsx = '';
    let title;
    
    if (photos.length > 0) {
      title = 'Results'
      jsx = photos.map(photo => {
        console.log(photo);
        return <Photo photo={photo} key={photo.id}/>
      })
    } else {
      title='Your search did not return any results. Please try again.'
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

export default withRouter(PhotoContainer);