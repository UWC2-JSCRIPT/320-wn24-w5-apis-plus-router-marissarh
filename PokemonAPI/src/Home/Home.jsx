import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PokemonList from '../PokemonList/PokemonList';


function Home() {
    const [searchPokemon, setSearchPokemon] =useState([]);
    const [pokemonList, setPokemonList] = useState([]);
    const viewPokemon = useNavigate();
    const navigate = useNavigate();
    
    const getAllPokemon = () => {
        viewPokemon('/all-pokemon');
    };

    const getPokemon = async () => {
        try {
            const response = await fetch ( `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`);
            if (!response.ok) {
                throw new Error('Pokemon not found');
            }
            const data = await response.json();
            setPokemonList([data]);
            navigate(`/pokemon/${searchPokemon}`);
        
       navigate(`/pokemon/${searchPokemon}`);
        } catch (error){
            console.erroe('Error fetching Pokemon', error);
        }
    };

  return (
    <div>
    <h1 >Search for Pokemon</h1>
    <input 
    type='text' 
    value ={searchPokemon} 
    onChange={(event)=>{setSearchPokemon(event.target.value);
    }}/>
    <button onClick={getPokemon}>Search</button>
    <PokemonList pokemonList={pokemonList}/>
    <button onClick={getAllPokemon}>View All Pokemon</button>
        </div>
  )
}

export default Home