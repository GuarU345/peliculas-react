import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import App from '../App'
import LandingPage from '../pages/LadingPage'
import MovieDetails from '../pages/MovieDetails'

const MyRoutes = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
        <Route path='moviedet/:movieid' render={(props)=><MovieDetails/>} element={<MovieDetails></MovieDetails>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default MyRoutes