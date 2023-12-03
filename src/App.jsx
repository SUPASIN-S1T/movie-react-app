import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieContainer from "./components/MovieContainer/MovieContainer";
import Footer from "./components/Footer/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchMovie, setSearchMovie] = useState("");
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=bc5f4bbc2ab1bb5f4b603fe6d312ce25";

  const loadingContainer = () => {
    return (
      <div className="loading-container">
        <h1>Loading...</h1>
      </div>
    );
  };

  const pageNotFound = () => {
    return (
      <div className="movie-not-found">
        <h1>"{searchMovie}"</h1>
        <p>DID NOT HAVE ANY MATCHES</p>
      </div>
    );
  };

  const searchMovies = (e) => {
    const value = e.target.value.trim();
    setSearchMovie(value);
    setLoading(true);
  };

  const getMovies = async () => {
    try {
      let url;
      if (searchMovie) {
        url = `${BASE_URL}/search/movie?${API_KEY}&query=${searchMovie}`;
      } else {
        url = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length > 0) {
        setMovies(data.results);
      } else {
        setMovies([]);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchMovie]);

  return (
    <>
      <Navbar searchMovies={searchMovies} />
      {loading && loadingContainer()}
      {movies.length === 0 && !loading ? (
        pageNotFound()
      ) : (
        <MovieContainer movies={movies} />
      )}
      <Footer />
    </>
  );
}

export default App;
