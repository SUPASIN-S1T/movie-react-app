import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../MovieContainer/MovieContainer.css";
import Modal from "./../Modal/Modal";

const MovieContainer = ({ movies }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w300";
  const [selectedMovie, setSelectedMovie] = useState(null);
  const closeModal = () => {
    setSelectedMovie(null);
  };
  return (
    <main className="main-container">
      <section className="movie-container">
        {movies.map((movie, index) => {
          const { vote_average, poster_path, title } = movie;
          return (
            <article
              className="movie-item"
              key={index}
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="movie-vote">
                <FaStar />
                <p>{parseInt(vote_average).toFixed(1)}</p>
              </div>
              <div className="movie-poster">
                <img src={IMG_URL + poster_path} alt={title} />
              </div>
            </article>
          );
        })}
      </section>
      {selectedMovie && <Modal movie={selectedMovie} closeModal={closeModal} />}
    </main>
  );
};

export default MovieContainer;
