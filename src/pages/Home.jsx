import React from 'react'
import Navbar from '../components/Header/navbar'
import MovieList from '../components/movies/MoiveList'

const Home = ({ updateChoies }) => {
  return (
    <div>
      <Navbar updateChoies={updateChoies} />
      <MovieList />
    </div>
  )
}

export default Home
