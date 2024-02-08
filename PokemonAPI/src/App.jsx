import { React, useState, useEffect } from 'react'
import Home from './Home/Home'
import Pagination from './Pagination/Pagination'
import axios from 'axios'
import './App.css'


function App() {
  const [pokemon, setPokemon] = useState([])
  const [homePageUrl, setHomePageUrl] =useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] =useState()
  const [previousPageUrl, setPreviousPageUrl] =useState()


  useEffect(()=>{

  axios.get(homePageUrl).then(res =>{
    setNextPageUrl(res.data.next)
    setPreviousPageUrl(res.data.previous)
    setPokemon(res.data.results.map(p=> p.name))
  })

},[homePageUrl])

function gotoNextPage(){
  setHomePageUrl(nextPageUrl)
}
function gotoPreviousPage(){
  setHomePageUrl(previousPageUrl)
}

  return (
    <>
   <Home pokemon={pokemon}/>
   <Pagination  
   gotoNextPage={nextPageUrl ? gotoNextPage :null} 
   gotoPreviousPage={previousPageUrl ? gotoPreviousPage :null}/>
   </>
  
  );
}

export default App
