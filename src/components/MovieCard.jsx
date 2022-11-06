import React from 'react'
import '../components/moviecard.css'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {

  const imageurl="https://image.tmdb.org/t/p/w300"+movie.poster_path

  return (
    <div>
        <li className='card'>
        <Link to={"/moviedet/"+movie.id}>
        <img className='movieimage' width={230} height={345} src={imageurl} alt={movie.title}/>
        </Link>
        <div>{movie.title}</div>
        </li>
    </div>
  )
}

export default MovieCard