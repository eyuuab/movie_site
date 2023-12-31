import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import Navbar from "./Header/navbar";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null; // Or you can render a placeholder, an error message, etc.
  }
  const { title, vote_average, release_date, overview, poster_path } = movie;

  return (
    <div style={{display:"flex",flexDirection:'column'}}>
    <Navbar/>
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
    </div>

  );
};

export default MovieCard;
