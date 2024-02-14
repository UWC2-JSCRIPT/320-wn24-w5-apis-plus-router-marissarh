import { React } from 'react'
import Home from './Home/Home'
import Pages from './Pages/Pages'
import Research from './PokemonResearch/Research'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App=()=>{



  return (
    <>
      
      <Home/>
        <Research/>
        
    </>
  );
  
}


export default App
