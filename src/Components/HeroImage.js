import React from 'react';

const HeroImage = (props) => {
  const {src, alt, credit, cssClass} = props;
  return (
      <figure className="hero-image">
        <img className={cssClass} src={src} alt={alt}></img>
        <figcaption>
          <span className="image-credit">{credit}</span>
        </figcaption>
      </figure>
  )
}

export default HeroImage;