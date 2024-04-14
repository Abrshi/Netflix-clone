import React from 'react';
import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';
import Rows from '../component/rows/Rows';
import Banner from '../component/Banner/Banner.js';
import Trending from '../component/Trending/Trending.js';
import TopRatedMovies from '../component/TopRatedMovies/TopRatedMovies.js';
import ActionMovies from '../component/ActionMovies/ActionMovies.js';
import ComedyMovies from '../component/ComedyMovies/ComedyMovies.js';
import TvShow from '../component/TvShow/TvShow.js';
import Documentaries from '../component/Documentaries/Documentaries.js';
import RomanceMovies from '../component/RomanceMovies/RomanceMovies.js';
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Rows />
      <Trending />
      <TopRatedMovies />
      <ActionMovies />
      <ComedyMovies />
      <RomanceMovies />
      <Documentaries />
      <TvShow />
      <Footer />
    </>
  );
}

export default Home;
