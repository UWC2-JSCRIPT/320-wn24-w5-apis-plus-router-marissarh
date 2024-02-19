import React from 'react'
import Home from './Home/Home'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Research from './PokemonResearch/Research';


function App() {
  return (
    <>
    
    <div>
      <Routes>
      <Route path="/Home" element={<Research/>}/>
      <Route path="/pokemon/:id" element={<Home/>}/>
      </Routes>
    </div>
    
    </>
  )
}

export default App