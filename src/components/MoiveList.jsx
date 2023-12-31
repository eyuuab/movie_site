import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./MovieCard.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page,setPage] =  useState(1)

  const fetchMovies = async () => {
    try {
      // Replace 'YOUR_API_KEY' and 'YOUR_API_ENDPOINT' with your actual API key and endpoint
      const apiKey = 'd417ec99ff4c14074a17bb24cec84529';
      const endpoint = 'https://api.themoviedb.org/3/movie/now_playing';
      const response = await fetch(`${endpoint}?page=${page}&&api_key=${apiKey}`);
      console.log("this is the curernt page",page)
      const data = await response.json();

      setMovies([...movies,...data.results]); // Assuming the movie data is in the 'results' property
      setPage(page+1)
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
        fetchMovies();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  const loadmore =()=>{
    const newPage  =  page+1
    setPage(newPage)
    fetchMovies()

  }
  return (
    <div className="movie_container">
      <div className="movie-list">
      {movies.length > 0 ? (
        <>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        </>


      ) : (
        <p>Loading...</p>
      )}
    </div>
    <button onClick={loadmore} className="loadmore">load more</button>
    </div>
  );
};

export default MovieList;
