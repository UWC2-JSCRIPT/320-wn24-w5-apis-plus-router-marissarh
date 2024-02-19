import {React, useState, useEffect } from 'react'

function AllPokemonPage() {
    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(()=>{
        const fetchAllPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
                if (!response.ok) {
                    throw new Error('Failed to fetch Pokemon');
                }
                const data = await response.json();
                setAllPokemon(data.results);
            } catch(error) {
                console.error('Error fetching Pokemon:', error);
            }
        };
        fetchAllPokemon();
    }, []);
  return (
    <div>
        <h1>All Pokemon </h1>
        <ul>
            {allPokemon.map((pokemon, index) =>(
            <li key={index}>{pokemon.name}</li>
            ))}
        </ul>
    </div>
  );
}

export default AllPokemonPage