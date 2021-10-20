import React from "react";
import { OutLineButton } from "../components/button";

import { Link } from "react-router-dom";

import HeroSlide from "../components/hero-slide";
import MovieList from "../components/movie-list";
import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutLineButton>View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated Movies</h2>
            <Link to="/movie">
              <OutLineButton>View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutLineButton>View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rate TV</h2>
            <Link to="/tv">
              <OutLineButton>View More</OutLineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={movieType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Home;
