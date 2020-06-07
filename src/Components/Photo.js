import React from 'react';

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
// https://farm66.staticflickr.com/65535/49979146261_757a6318b5.jpg  <-- this works

const Photo = ({photo}) => (
  <li>
    <img 
      src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
      alt={photo.title} />
  </li>
);

export default Photo;