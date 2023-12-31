import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  if (!movie) {
    return null;
  }
  const { title, vote_average, release_date, poster_path } = movie;

  const cardStyle = {
    textDecoration: "none",  // Remove underlines from links
    color: "inherit",       // Inherit text color from the parent
  };

  return (
    <Link to={`/movie/${movie.id}`} key={movie.id} style={cardStyle}>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="movie-poster"
        />
        <div className="movie-detail">
          <h3 className="movie-title">{title}</h3>
            <div className="movie-info">
            <p className="movie-rating">Rating: {vote_average}</p>
            <p className="movie-year">Year: {release_date}</p>
            </div>
          
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
