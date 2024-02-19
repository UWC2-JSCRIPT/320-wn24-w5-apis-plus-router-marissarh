import React from 'react'
import Home from './Home/Home'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom';
import Research from './PokemonResearch/Research';
import AllPokemonPage from './AllPokemon/AllPokemonPage';


function App() {
  return (
    <>
    
      <div>
          <nav>
            <ul className='pages'>
              <li><Link to ="/">Home</Link></li>
              <li><Link to="/all-pokemon">All Pokemon</Link></li>
            </ul>
          </nav>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemon/:id" element={<Research/>}/>
      <Route path="/all-pokemon" element={<AllPokemonPage/>}/>
      </Routes>
    </div>
    
    </>
  )
}

export default App