import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./details.css"; // Import the CSS file for styling
import Navbar from "../../components/Header/navbar";

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
      <Navbar /> {/* Render the Navbar component */}
      <div className="movie-detail-container">
        {/* Container for the movie details */}
        <div className="movie-detail-content">
          {/* Content of the movie details */}
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          {/* Display the movie poster */}
          <div className="movie-detail-info">
            {/* Container for the movie information */}
            <div className="movie-detail-header">
              <h1>{title}</h1> {/* Display the movie title */}
            </div>
            <p className="overview">{overview}</p> {/* Display the movie overview */}
            <p>Release Date: {release_date}</p> {/* Display the movie release date */}
            <p>Rating: {vote_average}</p> {/* Display the movie rating */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;