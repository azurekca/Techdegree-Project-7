import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

// React Components
import Photo from './Photo';
import HeroImage from './HeroImage';

class PhotoContainer extends Component {

  // check if url query parameter changed, fetch new data if it did, set loading state to false if it did not
  componentDidUpdate() {
    const newQuery = this.props.match.params.query;
    const oldQuery = this.props.query;

    if (newQuery !== oldQuery) {
     this.props.performSearch(this.props.match.params.query);
    } else if (this.props.loading) {
      this.props.handleLoading(false);
    }
  }

  // fetch new data when component mounts
  componentDidMount() {
    this.props.performSearch(this.props.match.params.query);
  }

  render() {
    const photos = this.props.photos
    let jsx = '';
    let title;
    
    if (this.props.loading) {
      title='Loading...';
    } else if (photos.length > 0) {
      title = 'Results'
      jsx = photos.map(photo => {
        return <Photo photo={photo} key={photo.id}/>
      })
    } else {
      jsx = (
        <HeroImage
          src={process.env.PUBLIC_URL + "/nothing_to_see_here.jpg"}
          alt="Nothing to see here... "
          credit="Image by ceyda koc"
          cssClass=""
        />
      );
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