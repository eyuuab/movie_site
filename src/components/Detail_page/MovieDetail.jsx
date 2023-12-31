// MovieDetail.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./details.css"; // Import the CSS file for styling
import Navbar from "../Header/navbar";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch the movie details using the movie ID
    const fetchMovieDetails = async () => {
      try {
        const apiKey = 'd417ec99ff4c14074a17bb24cec84529';
        const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const response = await fetch(endpoint);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const { title, overview, release_date, vote_average, poster_path } = movie;

  return (
   <>
   <Navbar/>
    <div className="movie-detail-container">

<div className="movie-detail-content">
  <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
  <div className="movie-detail-info">
          <div className="movie-detail-header">
          <h1>{title}</h1>
          </div>
    <p className="overview">{overview}</p>
    <p>Release Date: {release_date}</p>
    <p>Rating: {vote_average}</p>
  </div>
</div>
</div>
</>
  );
};

export default MovieDetail;
