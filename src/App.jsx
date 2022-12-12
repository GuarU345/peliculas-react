import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyRoutes from './routes/route'

function App() {
  

  return (
    <div>
    <header>
    <h1 className='principal-title'>🎬Peliculas</h1>
    </header>
    <MyRoutes/>
    </div>
  )
}

export default App
