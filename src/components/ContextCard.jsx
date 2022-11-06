import React, { useEffect, useState } from 'react'
import {get} from '../data/httpclient'
import MovieCard from '../components/MovieCard'
import '../components/contextcard.css'

const ContextCard = () => {

  const [movies,setMovies]=useState([])

  useEffect(()=>{
    get("/discover/movie").then((data)=>{
      setMovies(data.results)
    })
  },[])

  return (
    <ul className='container'>
      {movies.map((movie)=>{
        return(
          <MovieCard key={movie.id} movie={movie}/>
        )
      })}
    </ul>
  )
}

export default ContextCard