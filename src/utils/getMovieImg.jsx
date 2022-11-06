import React from 'react'
import image from '../img/palomitas.png'

export function getMovieImg(path,width){
    return path? `https://image.tmdb.org/t/p/w${width}${path}`:image
}

export default getMovieImg