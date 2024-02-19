import React from 'react'


function PokemonDetails({ pokemon }) {
    const attack = pokemon.stats.find(stat => stat.stat.name ==='attack').base_stat;
    const defense = pokemon.stats.find(stat => stat.stat.name ==='defense').base_stat;
  return (
    <div>
        <h2>{pokemon.name}</h2>
        <img src= {pokemon.sprites.front_default} alt={pokemon.name}/>
        <p>Attack:{attack}</p>
        <p>Defense: {defense}</p>
        
     
    </div>
  )
}

export default PokemonDetails