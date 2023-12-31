import React from 'react'

const MovieCard = ({movieTitle,cardImage,year,rating}) => {
  return (
    <div className="card ">
        <img className='cardImage' src={cardImage} />
        <h1 className="title">{movieTitle}</h1>
        <h2 className='rating'>{rating}</h2>
        <h2 className="year">{year}</h2>        
    </div>
  )
}

export default MovieCard