import React, { useState, useEffect } from "react";
import MovieCard from './movieCard'
import NavBar from '../Header/navbar';
import "./MovieCard.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [choies, setChoies] = useState('tv/top_rated');
  const [page,setPage] =  useState(1)//this is used to track the number of pages loaded from the api

  const updateChoies = (preference) => {
    if (preference === 'new') {
      setChoies('movie/upcoming');
    } 
    else if (preference === 'movies') {
      setChoies('movie/now_playing');
    }
    else if (preference === 'tvShows') {
      setChoies('tv/top_rated');
    } 
    else {
      // handle other preferences
      setChoies('tv/top_rated');
    }
  };

  const fetchMovies = async () => {
    try {
      // Replace 'API_KEY' and 'API_ENDPOINT' with your actual API key and endpoint
      const apiKey = '71000f68fdc86c5ff57acfc67deb4e50';
      const endpoint = 'https://api.themoviedb.org/3/';
      const choies = 'movie/now_playing';
      const response = await fetch(`${endpoint}${choies}?page=${page}&&api_key=${apiKey}`);
      console.log("this is the curernt page",page)
      const data = await response.json();

      setMovies([...movies,...data.results]); // Assuming the movie data is in the 'results' property
      //here the newly fetched data(list of movies) is added to the previous list of movies if there is any. otherwise it will be appended to an empty array
      //this is helpful when implementing the load-more feature below.
      setPage(page+1)//since the useEffect is executed twice during the mounting  process,increase pagecount by one to avoid duplicate loading.
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
        fetchMovies();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  const loadmore =()=>{
    //when loadmore button is clicked, the fetchmovies() function executes with pagenumber of 'page+1'(next page)
    const newPage  =  page+1
    setPage(newPage)
    fetchMovies()

  }
  return (
    <div>
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
    </div>
    
  );
};

export default MovieList;
