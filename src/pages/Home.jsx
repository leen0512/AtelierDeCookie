import React from 'react';
import Hero from '../components/Hero';
import FeaturedCookies from '../components/FeaturedCookies';

const Home = ({ startOrder, setCurrentPage }) => (
  <>
    <Hero startOrder={startOrder} />
    <FeaturedCookies setCurrentPage={setCurrentPage} />
  </>
);

export default Home;