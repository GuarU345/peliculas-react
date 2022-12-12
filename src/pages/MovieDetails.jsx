import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {get} from '../data/httpclient'
import getMovieImg from '../utils/getMovieImg'
import '../pages/moviedetails.css'

const MovieDetails = () => {
  const {movieid}=useParams()
  const [movie,setMovie]=useState([])
  const [generes,setGeneres]=useState([])

  
  
  useEffect(()=>{
     get("/movie/"+movieid).then((data)=>{
        setMovie(data)
        setGeneres(data.genres[0])
    })
  },[movieid])

  const imageurl=getMovieImg(movie.poster_path,500)

  return (
    <div className='container'>
        <img className='col imgdetail' src={imageurl} alt={movie.title}/>
        <div className='col moviedetails'>
            <p className='movie-title'>
                <strong>Title: </strong>
                {movie.title}
            </p>
            <p>
                <strong>Genere: </strong>
                {generes.name}
            </p>
            <p>
                <strong>Description: </strong>
                {movie.overview}
            </p>
        </div>
    </div>
  )
}

export default MovieDetails