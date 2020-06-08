import React from 'react';
import HeroImage from './HeroImage';

const Home = () => {
  return (
    <main className="photo-container">
      <HeroImage
        src="https://live.staticflickr.com/5263/5866516990_c0153ee3aa_c.jpg"
        alt="Le pays du vent"
        credit="Photo by paul Siemen"
      />
    </main>
  )
}

export default Home;