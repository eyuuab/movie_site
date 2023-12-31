import React, { useState, useEffect } from 'react';
import './movie.css'

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  const handleMovieChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMovie(selectedValue);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=d417ec99ff4c14074a17bb24cec84529`
        );
        const data = await response.json();

        // Assuming the response has a 'results' property containing an array of movies
        setMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    // Fetch movies only if searchTerm is not empty
    if (searchTerm !== '') {
      fetchMovies();
    }
  }, [searchTerm]);

  return (
    <div className="movies-list-container">
      <div className="movies-list-title">
        <h2>Movies List</h2>
      </div>
      <div className="movies-list-search">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="movies-list-input"
        />
      </div>
      <div>
        <select
          size={movies.length + 1}
          value={selectedMovie}
          onChange={handleMovieChange}
          className="movies-list-select"
        >
          <option value="" disabled>
            Select a movie
          </option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.title}>
              {movie.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Movie;
