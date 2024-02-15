import { React, useEffect, useState } from 'react'
import './App.css'

function App(){
  const [pokemonName, setPokemonName] = useState();
  const getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data)=> {
    console.log(data);
    
})
    
}
useEffect(()=>{
    getPokemon();
},[]);
  return (
    <>
    <div className='search'>
    <h1 >Search for Pokemon</h1>
    <input type='text' onChange={(event)=>{setPokemonName(event.target.value);
    }}/>
    <button onClick={getPokemon}>Search</button>
   </div> 
   </>
  );
}

export default App
