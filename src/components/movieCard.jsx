import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import Navbar from "./Header/navbar";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null; // Or you can render a placeholder, an error message, etc.
  }
  const { title, vote_average, release_date, overview, poster_path } = movie;//destructure usesful data from the movie object

  return (
      // each card when clicked routes to a new url with the id of that specific movie
    <Link to={`/movie/${movie.id}`} key={movie.id}>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <p className="movie-rating">Rating: {vote_average}</p>
          <p className="movie-year">Year: {release_date}</p>
        </div>
      </div>
      </Link>

  );
};

export default MovieCard;
