import React from "react";
import Hero from "../../components/Hero/Hero";
import FeaturedCookies from "../../components/FeaturedCookies/FeaturedCookies";

const Home = ({ startOrder, setCurrentPage }) => (
  <>
    <Hero startOrder={startOrder} />
    <FeaturedCookies setCurrentPage={setCurrentPage} />
  </>
);

export default Home;
