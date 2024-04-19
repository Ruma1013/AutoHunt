import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Newsletter from '../Components/NewsLetter/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Newsletter/>
    </div>
  );
}

export default Home;
